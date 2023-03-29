export interface IUsuario {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  isTop10: boolean;
  birthdate: Date;
}

export class Usuario implements IUsuario {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
    public isTop10: boolean,
    public birthdate: Date,
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  alternarTop10(ev: MouseEvent) {
    console.log(ev);
    this.isTop10 = !this.isTop10;
  }
}
