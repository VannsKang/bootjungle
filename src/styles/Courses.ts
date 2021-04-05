import styled from 'styled-components';
import { Devices, Mixin } from '@/common/theme';

const Courses = styled.main`
	position: relative;
	min-height: 100vh;
	width: 100%;
	padding-bottom: 150px;

	> div {
		margin: 50px 50px;

		@media ${Devices.laptop} {
			margin: 50px 200px;
		}

		@media ${Devices.laptopL} {
			margin: 50px 500px;
		}

		@media ${Devices.desktop} {
			margin: 50px 700px;
		}

		h1 {
			${Mixin.flexSet('center', 'center')}
			font-weight: 700;
			font-size: 2rem;
			margin-bottom: 50px;
			color: ${(props) => props.theme.colors.primary};
		}
	}
`;

const Course = styled.a`
	.MuiCardContent-root {
		> h2 {
			font-size: 1.2rem;
			font-weight: 700;
		}
	}
`;

const Rating = styled.div`
	${Mixin.flexSet('flex-start', 'center')};
	margin: 10px 0;
	> span {
		&:first-child {
			margin-right: 10px;
		}
	}
`;

const Tags = styled.div`
	> div {
		margin: 2px 2px;

		&:first-child {
			margin-left: 0px;
		}

		&:last-child {
			margin-right: 0px;
		}
	}
`;

export default {
	Courses,
	Course,
	Rating,
	Tags,
};
