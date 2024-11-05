export interface User {
  id: string;
  firstName: string;
  lastName: string;
  user: string;
  password: string;
  token: string;
  createData: Date;
}

export interface AuthData {
  email: string;
  password: string;
}
