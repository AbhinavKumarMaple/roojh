import { Link } from 'react-router-dom';

import './DoctorCard.css';
import { FaLocationDot } from 'react-icons/fa6';
const  DoctorCard=({doctor}:any)=> {

  return (
    <div className="card">
      <div className='details'>
      <img src={doctor.profileImage || "https://www.w3schools.com/howto/img_avatar.png"} alt={doctor.name} className="image" />
      <div className="info">
        <h3 className="name">{doctor.name}</h3>
        <p className="detail">Experience: {doctor.totalExperience} Years</p>
        <p className="detail">{doctor.doctorDepartment}</p>
        <p className="detail">Fees: ₹{doctor.fees["online"]}</p>
        <p className="address">
        <FaLocationDot/>
          {doctor.clinic.name}, {doctor.clinic.address}
        </p>
      </div>
      </div>
        <Link to={`/doctor/${"6698d3dad9f56a46bdf35753"}`} state={{ doctorId: "6698d3dad9f56a46bdf35753" , doctor:doctor}} className="button">Book Appointment</Link>
    </div>
  )
}
  

export default DoctorCard