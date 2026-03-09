import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ServiceType = {
    __kind__: "bondCleaning";
    bondCleaning: null;
} | {
    __kind__: "windowCleaning";
    windowCleaning: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "pestControl";
    pestControl: null;
} | {
    __kind__: "carpetCleaning";
    carpetCleaning: null;
};
export interface Enquiry {
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    address: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(name: string, phone: string, email: string, address: string, serviceType: ServiceType, message: string): Promise<void>;
}
