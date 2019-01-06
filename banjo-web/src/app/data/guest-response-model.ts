export class GuestResponseModel {
    id: Number;
    name: String;
    partner: String;
    lastName: String;
    address: String;
    zipcode: String;
    totalGuestsAllowed: Number;
    confirmedGuests?: Number;
    dateModified: Date;
}
