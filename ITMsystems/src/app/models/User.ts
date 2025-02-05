export interface User {
id?: number|undefined;
name: string;
email:string;
password: string;
}


//  export type PublicUser = Omit<User, "id" >;
