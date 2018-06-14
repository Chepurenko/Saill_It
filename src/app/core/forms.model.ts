
export class LoginModel {
  email: string;
  password: string;
  constructor(data: any) {
    this.email = data.userEmail;
    this.password = data.userPassword;
  }
}

export class RegistrationModel {
  username: string;
  email: string;
  password1: string;
  password2: string;
  constructor (data: any) {
    this.username = data.userName;
    this.email = data.userEmail;
    this.password1 = data.userPassword;
    this.password2 = data.confirmPassword;
  }
}
