export interface Slot {
    start: string;
    end: string;
  }
  
  export interface DoctorData {
    dayOfWeek: string;
    dayOfWeekId: number;
    doctorId: string;
    slotDuration: number;
    facilityId: string;
    date: string;
    totalSlots: Slot[];
  }
  
  export interface Clinic {
    _id: string;
    address: string;
    name: string;
    phoneNo: string;
  }
  
  export interface Fees {
    online: number;
    'In-Hospital': number;
  }
  
  export interface LocationData {
    name: string;
    profileImage: string;
    totalExperience: string;
    doctorDepartment: string;
    clinic: Clinic;
    fees: Fees;
  }

  export interface onSearch {
    onSearch: (query: string) => void;
  }

  export interface Client {
    _id:string;
    address:string;
    name:string;
    phoneNo:string;
  }

  export interface Fees {
    online:number;
    'In-Hospital':number;
  }

  export interface Doctor{
    name:string;
    profileImage:string;
    totalExperience:string;
    doctorDepartment:string;
    clinic:Client;
    fees:Fees;
  }
  