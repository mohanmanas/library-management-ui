export class User {
    public userId: number;
	public userName: string;
	public dob: string;
	public email: string;
	public phoneNumber: string;
    
    constructor(userId: number, userName: string, dob: string, email: string, phoneNumber: string) {
        this.userId = userId;
        this.userName = userName;
        this.dob = dob;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}