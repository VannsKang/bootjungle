import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducer';
import { CourseType } from '@/template';

import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import { Button } from '@material-ui/core';
import s from '@/styles/Filter';

const Filter = () => {
  const { filters } = useSelector((state: RootState) => state.courseReducer);

  return (
    <s.Filter>
      <div>
        <h1>
          <FilterListRoundedIcon />
          <span>필터</span>
        </h1>
        {filters.map((filter: CourseType.Filter) => (
          <div key={filter.id}>
            <h2>
              {filter.title === '리뷰 평점별' && <FavoriteIcon />}
              {filter.title === '태그별' && <LoyaltyOutlinedIcon />}
              {filter.title === '비용별' && <MonetizationOnOutlinedIcon />}
              <span>{filter.title}</span>
            </h2>
            <div>
              {filter.items.map((item) => (
                <Button
                  key={item}
                  variant='outlined'
                  color='primary'
                  size='small'
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </s.Filter>
  );
};

export default Filter;
