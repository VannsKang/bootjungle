export declare module BootcampType {
  // SECTION Bootcamps
  export interface Bootcamp {
    id: number;
    name: string;
    kor_name: string;
    logo_url: string;
    score: number;
    comments_number: number;
    intro: string;
    detail_infos: DetailInfos;
    location: Location;
  }
  export interface DetailInfos {
    title: string;
    desc: string;
  }

  export interface Location {
    address: string;
    cordinate: { x: number; y: number };
  }

  export interface BootcampState {
    bootcamps: Bootcamp[];
    isLoading: boolean;
    error: string | null;
  }
}
