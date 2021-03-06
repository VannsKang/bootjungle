import { NextPage } from 'next';
import { FC } from 'react';
export type { RankingType } from '@/template/Ranking';
export type { BootcampType } from '@/template/Bootcamp';

export type NextLayout = NextPage & { Layout?: FC };
