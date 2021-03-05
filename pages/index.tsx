import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

// LINK style, type, components
import s from '@/styles/Home';
import { Button } from '@material-ui/core';
import { fetchRanking } from '@/store/actions';
import { Carousel, Rankings } from '@/components/Home';

// LINK dynmic loading component
// import dynamic from 'next/dynamic';
// const Carousel = dynamic(() => import('@/components/Home/Carousel'));
// const Rankings = dynamic(() => import('@/components/Home/Rankings'));

export const getStaticProps: GetStaticProps = async () => {
  // const rankings = await apiHome.getRankingTables();
  const { RANKING_LIST_API } = process.env;

  return {
    props: {
      RANKING_LIST_API,
    },
    revalidate: 1,
  };
};

const Home = ({
  RANKING_LIST_API,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRanking(RANKING_LIST_API));
  }, []);

  return (
    <>
      <Head>
        <title>BOOTJUNGLE | Home</title>
      </Head>
      <s.MainContent>
        <Carousel />
        <h1>2020년 부트캠프 순위</h1>
        <Rankings />
        <s.ListSection>
          <Link href='/bootcamps'>
            <a>
              <Button variant='contained' color='primary'>
                부트캠프 전체보기
              </Button>
            </a>
          </Link>
          <Link href='/bootcamps/courses'>
            <a>
              <Button variant='contained' color='primary'>
                부트캠프 코스 전체보기
              </Button>
            </a>
          </Link>
        </s.ListSection>
      </s.MainContent>
    </>
  );
};

export default Home;
