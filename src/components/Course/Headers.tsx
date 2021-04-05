import { FC } from 'react';

// LINK style/type
import s from '@/styles/Details';
import { BootcampType } from '@/typings';

import Rating from '@material-ui/lab/Rating';

const Headers: FC<BootcampType.BootcampProps> = ({ bootcamp }) => {
	return (
		<s.Headers>
			<section>
				<img src={bootcamp.logo_url} alt='logo' />
			</section>
			<section>
				<div>
					<h1>
						<div>{bootcamp.kor_name}</div>
					</h1>
					<h4>
						<div>{bootcamp.name}</div>
					</h4>
				</div>

				<table>
					<tbody>
						<tr>
							<th>소개</th>
							<td>{bootcamp.intro}</td>
						</tr>

						<s.Score>
							<th>점수</th>
							<td>
								<Rating
									name={'score'}
									precision={0.5}
									value={bootcamp.score}
									readOnly
								/>
								<span>{bootcamp.score}</span>
							</td>
						</s.Score>

						{bootcamp.detail_infos.map((detail_info) => (
							<tr key={detail_info.title}>
								<th>{detail_info.title}</th>
								<td>{detail_info.desc}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</s.Headers>
	);
};

export default Headers;
