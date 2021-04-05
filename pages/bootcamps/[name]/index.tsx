import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import axios from 'axios';

// LINK types/component/style
import { BootcampType } from '@/typings';
import { Headers, Filter } from '@/components/Bootcamp';
import s from '@/styles/Details';

// LINK dynmic loading component
// import dynamic from 'next/dynamic';
// const Filter = dynamic(() => import('@/components/Bootcamp/Filter'));

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await axios.get(process.env.BOOTCAMP_LIST);
	const { bootcamps } = await res.data;

	const paths = bootcamps.map((bootcamp: BootcampType.Bootcamp) => {
		return {
			params: { name: bootcamp.name },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const name = context.params?.name;
	const res = await axios.get(`http://localhost:3000/database/${name}.json`);
	const { bootcamp } = await res.data;

	const resComments = await axios.get(
		`http://localhost:3000/database/comments?bootcamp=${name}.json`
	);

	console.log(resComments);

	const { comments, filters } = await resComments.data;

	return {
		props: {
			bootcamp,
			comments,
			filters,
		},
		revalidate: 1,
	};
};

const Details = ({
	bootcamp,
	comments,
	filters,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	console.log(comments, filters);
	return (
		<>
			<Head>
				<title>BOOTJUNGLE | {bootcamp.name}</title>
			</Head>
			<s.Details>
				<div>
					<Headers bootcamp={bootcamp} />
				</div>
				<Filter />
			</s.Details>
		</>
	);
};

export default Details;
