import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/reducer';
import { CourseType } from '@/typings';
import { getFilterBootcamp } from '@/store/actions/bootcampActions';

import s from '@/styles/Filter';

import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import { Button } from '@material-ui/core';

const Filter = <T extends { type: string }>({ type }: T) => {
	const dispatch = useDispatch();

	const { filters } =
		type === 'course'
			? useSelector((state: RootState) => state.courseReducer)
			: useSelector((state: RootState) => state.bootcampReducer);

	const clickFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { id } = e.currentTarget.dataset;
		dispatch(getFilterBootcamp(Number(id)));
	};

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
							{filter.items.map((item, idx) => (
								<Button
									key={idx}
									variant='outlined'
									color='primary'
									size='small'
									onClick={clickFilter}
									data-id={item.value}
								>
									{item.title}
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
