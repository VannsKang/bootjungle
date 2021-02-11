import styled from 'styled-components';
import { Devices, Mixin } from '@/common/theme';

const Bootcamps = styled.main`
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

export default {
  Bootcamps,
};
