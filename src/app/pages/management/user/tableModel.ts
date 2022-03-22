export interface DoctorTable {
    'id': string;
    'Image': string;
    'userName': string;
    'location': string;
    'mobileNo': string;
    'ownedby': string;
    'verifed': string;
    'status': string;
}
export interface FacilitatorListingTable {
    'id': string;
    'Image': string;
    'facilitatorName': string;
    'location': string;
    'status': string;
    'verified': boolean;
    'mobileNo': string;
}

// tslint:disable-next-line:class-name
export interface appointmentTable {
    'id': string;
    'Image': string;
    'Name': string;
    'City': string;
    'Status': string;
    'NoOfAdmins': number;
    'ProgramCount': number;
    'StartDate': Date;
    'AppointmentType': string;
    'Programs': string;
    'NoOfPrograms': number;
    'NoOfFacilitatorsAttend': number;
    'NoOfFacilitatorsReject': number;
    'Amount': number;
    'EndDate': Date;
    'EndTime': string;
}


// export const userListColumn = {
// }
