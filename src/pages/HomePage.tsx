import { useEffect, useState } from "react"
import { fetchDcotrs } from "../api/api"
import DoctorCard from "../components/DoctorCard";

function HomePage() {

  const [doctors, setDoctors] = useState([    {
    name:"something",
    doctorDepartment:"something....",
    totalExperience:"something....",
  }])
  const enterpriseId = '6643187506241f0cc1512b30';
  const facilityId = '66504ce706ea3b0a5063e3be'; 
  




  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     const doctors = await fetchDcotrs(enterpriseId,facilityId)
  //     console.log(doctors)
  //     setDoctors(doctors)
  //   }
  //   fetchData()
  // },[])

  return (
    <div>
      <div>testing</div>
      {
doctors.map((doctor:any) => ( 
<DoctorCard key={doctor.name} doctor={doctor}/>
))
      }
    </div>
  )
}

export default HomePage