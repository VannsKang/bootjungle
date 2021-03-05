export declare module CourseType {
  // SECTION Bootcamps
  export interface Course {
    id: number;
    name: string;
    korName: string;
    courseKorName: string;
    courseEngName: string;
    logoUrl: string;
    score: number;
    intro: string;
    tags: string[];
  }

  export interface Filter {
    id: number;
    title: string;
    items: string[];
  }

  export interface CourseState {
    courses: Course[];
    filters: Filter[];
    isLoading: boolean;
    error: string | null;
  }

  export interface CourseData {
    courses: Course[];
    filters: Filter[];
  }

  export interface CourseProps {
    course: Course;
  }
}
