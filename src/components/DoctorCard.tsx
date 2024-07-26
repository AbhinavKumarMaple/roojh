import { Link } from 'react-router-dom';
import './DoctorCard.css';
const  DoctorCard=({doctor}:any)=> {

    // const handleAppointmentClick = () => {
    //     navigate(`/doctor/${doctor.name}`, { state: { doctorId: doctor.name } });
    //   };
  return (
    <div className="card">
      <img src={doctor.profileImage || "https://www.w3schools.com/howto/img_avatar.png"} alt={doctor.name} className="image" />
      <div className="info">
        <h3 className="name">{doctor.name}</h3>
        <p className="detail">Experience: {doctor.totalExperience} Years</p>
        <p className="detail">{doctor.doctorDepartment}</p>
        <p className="detail">Fees: ₹{doctor.fees["online"]}</p>
        <p className="address">
          <span className="icon">&#x1F4CD;</span>
          {doctor.clinic.name}, {doctor.clinic.address}
        </p>
        <Link to={`/doctor/${"6698d3dad9f56a46bdf35753"}`} state={{ doctorId: "6698d3dad9f56a46bdf35753" , doctor:doctor}} className="button">Book Appointment</Link>
      </div>
    </div>
  )
}
  

export default DoctorCard