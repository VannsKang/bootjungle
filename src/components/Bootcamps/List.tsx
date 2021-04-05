import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { BootcampType } from '@/typings';
import { RootState } from '@/store/reducer';
import s from '@/styles/Courses';

import { Grid, Typography, GridSize } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';

const List = () => {
	const [grid, setGrid] = useState<GridSize>(4);
	const { bootcamps } = useSelector(
		(state: RootState) => state.bootcampReducer
	);

	useEffect(() => {
		if (window.innerWidth <= 768) setGrid(6);
		if (window.innerWidth <= 500) setGrid(12);
	}, []);

	return (
		<Grid container spacing={3}>
			{bootcamps.map((bootcamp: BootcampType.Bootcamp) => (
				<Grid item xs={grid} key={bootcamp.id}>
					<Link href={`/bootcamps/${bootcamp.name}`}>
						<s.Course>
							<Card>
								<CardActionArea>
									<CardMedia
										component='img'
										alt='bootcamp'
										width='140'
										height='140'
										image={bootcamp.logo_url}
										title='bootcamp-logo'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5' component='h2'>
											{bootcamp.kor_name}
										</Typography>
										<s.Rating>
											<Rating
												name={bootcamp.name}
												precision={0.5}
												value={bootcamp.score}
												readOnly
											/>
											<span>{bootcamp.score}</span>
										</s.Rating>
										<s.Tags>
											{bootcamp.tags.map((tag, idx) => (
												<Chip
													size='small'
													color='primary'
													key={idx}
													label={tag}
												/>
											))}
										</s.Tags>
										{/* <Typography
											variant='body2'
											color='textSecondary'
											component='p'
										>
											{bootcamp.intro}
										</Typography> */}
									</CardContent>
								</CardActionArea>
							</Card>
						</s.Course>
					</Link>
				</Grid>
			))}
		</Grid>
	);
};

export default List;
