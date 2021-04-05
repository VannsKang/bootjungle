import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

// LINK type, styles
import { List, Filter } from '@/components/Courses';
import { fetchCourse } from '@/store/actions';
import s from '@/styles/Courses';

export const getStaticProps: GetStaticProps = async () => {
	const { COURSE_LIST } = process.env;

	return {
		props: {
			COURSE_LIST,
		},
		revalidate: 1,
	};
};

const Courses = ({
	COURSE_LIST,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCourse(COURSE_LIST));
	}, []);

	return (
		<>
			<Head>
				<title>BOOTJUNGLE | Courses</title>
			</Head>
			<s.Courses>
				<Filter type='course' />
				<div>
					<h1>코스 리스트</h1>
					<List />
				</div>
			</s.Courses>
		</>
	);
};

export default Courses;
