import { NextPage } from 'next';
import { FC } from 'react';

export type { RankingType } from '@/typings/Ranking';
export type { BootcampType } from '@/typings/Bootcamp';
export type { CourseType } from '@/typings/Course';

export type NextLayout = NextPage & { Layout?: FC };
