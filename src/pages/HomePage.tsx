import { useEffect, useState, useTransition } from "react"
import { fetchDcotrs } from "../api/api"
import DoctorCard from "../components/DoctorCard";
import SearchBar from "../components/SearchBar";
import './HomePage.css'
import Logo from "../assets/Logo.png"
import {FaChevronRight, FaLocationDot} from "react-icons/fa6"
function HomePage() {

  const [doctors, setDoctors] = useState([    
])
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [isPending, startTransition] = useTransition()
  const enterpriseId = '6643187506241f0cc1512b30';
  const facilityId = '66504ce706ea3b0a5063e3be'; 

  useEffect(()=>{
    const fetchData = async () =>{
      const doctors = await fetchDcotrs(enterpriseId,facilityId)
      console.log(doctors)
      setDoctors(doctors)
      setFilteredDoctors(doctors)
    }
    fetchData()
  },[])
const handleSearch = (query:string) =>{
  startTransition(()=>{
  setFilteredDoctors(doctors.filter((doctor:any)=>doctor.name.toLowerCase().includes(query.toLowerCase())))
})}
  return (
    <div className="home-page">
      <img className="header-logo" src={Logo}/>
      <h2>
          Booking Appointment for <span className='orange-text'>{"Ashwini Hingolikar"}</span><FaChevronRight color='#E83D44'/>
      </h2>
      <SearchBar onSearch={handleSearch}/>
      <div className="location-text">
        <FaLocationDot/>
        <text>
        {" View All Roojh Hospitals >"}
        </text>
      </div>
      <div className="card-container">
        <text>Results</text>
      {
        isPending ? (<div>Loading...</div>) :
        (filteredDoctors.map((doctor:any) => ( 
          <DoctorCard key={doctor.name} doctor={doctor}/>
        )))
      }
    </div>
      </div>
  )
}

export default HomePage