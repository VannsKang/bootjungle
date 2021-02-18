import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

// LINK type, styles
import { List } from '@/components/Bootcamp';
import { fetchBootcamp } from '@/store/actions';
import s from '@/styles/Bootcamps';

export const getStaticProps: GetStaticProps = async () => {
  const { BOOTCAMP_LIST } = process.env;

  return {
    props: {
      BOOTCAMP_LIST,
    },
    revalidate: 1,
  };
};

const Bootcamps = ({
  BOOTCAMP_LIST,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBootcamp(BOOTCAMP_LIST));
  }, []);

  return (
    <>
      <Head>
        <title>BOOTJUNGLE | Bootcamps</title>
      </Head>
      <s.Bootcamps>
        <div>
          <h1>부트캠프 리스트</h1>

          <List />
        </div>
      </s.Bootcamps>
    </>
  );
};

export default Bootcamps;
