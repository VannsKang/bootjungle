import { FC } from 'react';
import { useSelector } from 'react-redux';

// LINK style/mui/type
import s from '@/styles/Home';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { StyledRating } from '@/common/theme';
import { RankingType } from '@/typings';
import { RootState } from '@/store/reducer';

const Rankings: FC = () => {
	const { rankings } = useSelector((state: RootState) => state.rankingReducer);
	return (
		<s.Rankings>
			{rankings.map((rankingTable) => (
				<div key={rankingTable.title}>
					<h2>{rankingTable.title}</h2>
					<table>
						<thead>
							<tr>
								<th>순위</th>
								<th>부트캠프</th>
								<th>평점</th>
							</tr>
						</thead>
						<tbody>
							{/* NOTE Ranking Items */}
							{rankingTable.items.map((ranking: RankingType.Ranking) => (
								<tr key={ranking.id}>
									<td>{ranking.id}</td>
									<td>{ranking.kor_name}</td>
									<td>
										{rankingTable.title === '비용별' && (
											<Rating
												name='half-rating-read'
												defaultValue={ranking.score}
												precision={0.5}
												readOnly
											/>
										)}
										{rankingTable.title === '평점별' && (
											<StyledRating
												name='customized-color'
												defaultValue={ranking.score}
												precision={0.5}
												icon={<FavoriteIcon fontSize='inherit' />}
												readOnly
											/>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</s.Rankings>
	);
};

export default Rankings;
