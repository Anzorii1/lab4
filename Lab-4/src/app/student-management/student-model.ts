// student.model.ts
export class Student {
    firstName!: string;
    lastName!: string;
    personalNumber!: string;
    address: {
      country: string;
      city: string;
      street: string;
    };
  
    constructor() {
      this.address = {
        country: '',
        city: '',
        street: '',
      };
    }
  }
  