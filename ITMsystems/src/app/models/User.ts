export interface User {
id: string;
name: string;
email:string;
password: string;
}


//  export type PublicUser = Omit<User, "id" >;
