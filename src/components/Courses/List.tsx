import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { CourseType } from '@/template';
import { RootState } from '@/store/reducer';
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
          <Link href={'/courses/' + course.id}>
            <a>
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
                    <span>{course.score}</span>
                    <Rating
                      name={course.courseEngName}
                      precision={0.5}
                      value={course.score}
                      readOnly
                    />
                    <div>
                      {course.tags.map((tag, idx) => (
                        <Chip
                          size='small'
                          color='primary'
                          key={idx}
                          label={tag}
                        />
                      ))}
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
