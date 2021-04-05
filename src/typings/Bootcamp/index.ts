export declare module BootcampType {
	export interface BootcampState {
		bootcamps: Bootcamp[];
		originBootcamps: Bootcamp[];
		filters: Filter[];
		isLoading: boolean;
		error: string | null;
	}

	export interface BootcampData {
		bootcamps: Bootcamp[];
		filters: Filter[];
	}

	export interface FilteredBootcampData {
		bootcamps: Bootcamp[];
	}

	export interface BootcampProps {
		bootcamp: Bootcamp;
	}

	// SECTION Bootcamps
	export interface Bootcamp {
		id: number;
		name: string;
		kor_name: string;
		logo_url: string;
		score: number;
		comments_number: number;
		intro: string;
		detail_infos: DetailInfos[];
		tags: string[];
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

	export interface Filter {
		id: number;
		title: string;
		items: FilterItem[];
	}

	export interface FilterItem {
		title: string;
		value: string | number;
	}
}
