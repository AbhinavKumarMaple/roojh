export interface Slot {
    start: string;
    end: string;
  }
  
  export interface DoctorSchedule {
    dayOfWeek: string;
    dayOfWeekId: number;
    doctorId: string;
    slotDuration: number;
    facilityId: string;
    date: string;
    totalSlots: Slot[];
  }
  
  export interface DoctorPageState {
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
  
