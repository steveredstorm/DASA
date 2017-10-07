import { GUID } from './guid';

export interface IUser {
    id: GUID;
    fname: string;
    lname: string;
    uname: string;
    email: string;
    type: UserType;
    status: Status
}

export class User implements IUser {
    id: GUID;
    fname: string;
    lname: string;
    uname: string;
    email: string;
    type: UserType;
    status: Status;
    sex: string;
    age: number;
    prof_img: URL;
    prof_img_thumb: URL;
    images: [URL];
    pos: {
        lat: number,
        lon: number
    }
}

export enum UserType {
    admin = 0,
    model = 1,
    dorrMan = 2,
    clubOwner = 3,
    gust = 4,
    celebrity = 5
}

export enum Status {
    active = 0,
    blocked = 1,
    pending = 2
}