export declare module RankingType {
  export interface Ranking {
    id: number;
    name: string;
    kor_name: string;
    logo_url: string;
    score: number;
  }

  export interface RankingState {
    rankings: Rankings;
    isLoading: boolean;
    error: string | null;
  }

  export interface RankingTable {
    title: string;
    items: Ranking[];
  }

  export type Rankings = RankingTable[];
}
