import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { CourseType } from '@/typings';
import { RootState } from '@/store/reducer';
import s from '@/styles/Courses';

import { Grid, Typography, GridSize } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';

const List = () => {
	const [grid, setGrid] = useState<GridSize>(4);
	const { courses } = useSelector((state: RootState) => state.courseReducer);

	useEffect(() => {
		if (window.innerWidth <= 768) setGrid(6);
		if (window.innerWidth <= 500) setGrid(12);
	}, []);

	return (
		<Grid container spacing={3}>
			{courses.map((course: CourseType.Course) => (
				<Grid item xs={grid} key={course.id}>
					<Link href={`courses/${course.id}`}>
						<s.Course>
							<Card>
								<CardActionArea>
									<CardMedia
										component='img'
										alt='bootcamp'
										width='140'
										height='140'
										image={course.logoUrl}
										title='bootcamp-logo'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5' component='h2'>
											{course.courseKorName}
										</Typography>
										<s.Rating>
											<Rating
												name={course.courseEngName}
												precision={0.5}
												value={course.score}
												readOnly
											/>
											<span>{course.score}</span>
										</s.Rating>
										<s.Tags>
											{course.tags.map((tag, idx) => (
												<Chip
													size='small'
													color='primary'
													key={idx}
													label={tag}
												/>
											))}
										</s.Tags>
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
