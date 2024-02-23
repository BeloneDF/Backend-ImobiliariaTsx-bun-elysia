interface User {
    name: string;
    phone: number;
    email: string;
    message: string;
  }
  
  export interface Email {
    user: User;
    data: User[];
  }
