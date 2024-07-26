import axios from "axios";

const BASE_URL = 'https://api-development.roojh.com//api/v1/doctor';

export const fetchDcotrs = async (enterpriseId:string, facilityId:string) => {
    const response = await axios.get(`${BASE_URL}/getDoctors`,{
        params:{
            enterpriseId,
            facilityId
        }
    });
    return response.data;
}

export const fetchDoctorDetails = async (enterpriseId:string, facilityId:string, date:string, doctorId:string) =>{
    const response = await axios.get(`${BASE_URL}/fetchDoctorSchedules`,{
        params:{
            enterpriseId,
            facilityId,
            date,
            doctorId
        }
    });
    return response.data;
} 