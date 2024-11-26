export interface claim {
    name: string;
    value: string;
} 

export interface userCredentials {
    email: string;
    password: string;
}

export interface authenticationResponse{
    token: string;
    expirationKey: string;
    success:boolean;
    errors: string[]
    message:string;
}

export interface userDTO {
    id: string;
    email: string;
}