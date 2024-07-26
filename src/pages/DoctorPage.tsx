import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DoctorPage.css';

interface Slot {
  start: string;
  end: string;
}

interface DoctorSchedule {
  dayOfWeek: string;
  dayOfWeekId: number;
  doctorId: string;
  slotDuration: number;
  facilityId: string;
  date: string;
  totalSlots: Slot[];
}

interface DoctorPageState {
  doctor: {
    name: string;
    profileImage: string;
    totalExperience: string;
    doctorDepartment: string;
    clinic: {
      _id: string;
      address: string;
      name: string;
      phoneNo: string;
    };
    fees: {
      online: number;
      'In-Hospital': number;
    };
  };
  doctorId: string;
}

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const adjustedHours = hours % 12 || 12;
  return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};

function DoctorPage() {
  const location = useLocation();
  const { doctorId, doctor } = location.state as DoctorPageState;
  const [schedules, setSchedules] = useState<DoctorSchedule[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [today] = useState<string>(new Date().toISOString().split('T')[0]);
  const [nextSlot, setNextSlot] = useState<Slot | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      const response = await fetch(
        `https://api-development.roojh.com/api/v1/doctor/fetchDoctorSchedules?enterpriseId=6643187506241f0cc1512b30&facilityId=66504ce706ea3b0a5063e3be&date=2025-07-22&doctorId=${doctorId}`
      );
      const data = await response.json();
      setSchedules(data);
      findNextSlot(data);
    };

    if (doctorId) {
      fetchSchedules();
    }
  }, [doctorId]);

  const findNextSlot = (schedules: DoctorSchedule[]) => {
    for (const schedule of schedules) {
      if (schedule.totalSlots.length > 0) {
        setNextSlot(schedule.totalSlots[0]);
        break;
      }
    }
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotChange = (slot: Slot) => {
    setSelectedSlot(slot);
  };

  const getAvailableSlots = (date: string): Slot[] => {
    const dayOfWeek = new Date(date).getDay();
    const doctorSchedule = schedules.find(
      (schedule) => schedule.dayOfWeekId === dayOfWeek
    );
    return doctorSchedule ? doctorSchedule.totalSlots : [];
  };

  const availableSlots = selectedDate ? getAvailableSlots(selectedDate) : [];

  return (
    <div className="doctor-page">
      <header className="header">
        <h1>
          Roo<span>jh</span>
        </h1>
      </header>
      <section className="doctor-info">
        <h2>
          Booking Appointment for <span className='orange-text'>{doctor.name}</span>
        </h2>
        <p>Fees: ₹{doctor.fees.online}</p>
        <p>Location: Hill Road, Nagpur-440012</p>
        <div className="separator" />
        <div className="next-slot">
          <p>Next Slot Available:</p>
          {nextSlot ? (
            <div className="slot-available">
              <button>{`${formatTime(nextSlot.start)} - ${formatTime(nextSlot.end)}`}</button>
            </div>
          ) : (
            <p>No Slots available</p>
          )}
        </div>
      </section>
      <section className="date-selector">
        <button
          onClick={() => handleDateChange(today)}
          className={selectedDate === today ? 'selected' : ''}
        >
          <div className="date">Today</div>
          <div className="slots-available">
            {selectedDate === today && availableSlots.length > 0
              ? `${availableSlots.length} Slots available`
              : 'No Slots available'}
          </div>
        </button>
        {schedules.map((schedule) => (
          <button
            key={schedule.date}
            onClick={() => handleDateChange(schedule.date)}
            className={selectedDate === schedule.date ? 'selected' : ''}
          >
            <div className="date">
              {new Date(schedule.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
            </div>
            <div className="slots-available">{schedule.totalSlots.length} Slots available</div>
          </button>
        ))}
      </section>
      <section className="slots">
        {availableSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => handleSlotChange(slot)}
            className={selectedSlot === slot ? 'selected' : ''}
          >
            {formatTime(slot.start)} - {formatTime(slot.end)}
          </button>
        ))}
      </section>
      <section className="contact-info">
        <p>Hospital Contact Number:</p>
        <p><a href={`tel:${doctor.clinic.phoneNo}`}>{doctor.clinic.phoneNo}</a></p>
      </section>
    </div>
  );
}

export default DoctorPage;
