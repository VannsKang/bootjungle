import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import TimerIcon from '@material-ui/icons/Timer';
import { Button } from '@material-ui/core';
import s from '@/styles/Details';

const Filter = () => {
  return (
    <s.Filter>
      <div>
        <h1>
          <FilterListRoundedIcon />
          <span>필터</span>
        </h1>
        <div>
          <h2>
            <FavoriteIcon />
            <span>리뷰 평점별</span>
          </h2>
          <div>
            <Button variant='outlined' color='primary'>
              전체
            </Button>
            <Button variant='outlined' color='primary'>
              5점
            </Button>
            <Button variant='outlined' color='primary'>
              4점
            </Button>
            <Button variant='outlined' color='primary'>
              3점
            </Button>
            <Button variant='outlined' color='primary'>
              2점
            </Button>
            <Button variant='outlined' color='primary'>
              1점
            </Button>
          </div>
        </div>
        <div>
          <h2>
            <MonetizationOnOutlinedIcon />
            <span>비용별</span>
          </h2>
          <div>
            <Button variant='outlined' color='primary'>
              전체
            </Button>
            <Button variant='outlined' color='primary'>
              900만원 이상
            </Button>
            <Button variant='outlined' color='primary'>
              500만원
            </Button>
            <Button variant='outlined' color='primary'>
              300만원
            </Button>
            <Button variant='outlined' color='primary'>
              100만원
            </Button>
            <Button variant='outlined' color='primary'>
              무료
            </Button>
          </div>
        </div>
        <div>
          <h2>
            <TimerIcon />
            <span>개발자 경력별</span>
          </h2>
          <div>
            <Button variant='outlined' color='primary'>
              전체
            </Button>
            <Button variant='outlined' color='primary'>
              10년차 이상
            </Button>
            <Button variant='outlined' color='primary'>
              5년차 이하
            </Button>
            <Button variant='outlined' color='primary'>
              3년차 이하
            </Button>
            <Button variant='outlined' color='primary'>
              1년차 이하
            </Button>
            <Button variant='outlined' color='primary'>
              0년차
            </Button>
          </div>
        </div>
      </div>
    </s.Filter>
  );
};

export default Filter;
