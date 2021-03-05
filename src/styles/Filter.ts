import styled from 'styled-components';
import { Devices, Mixin } from '@/common/theme';

const Filter = styled.section`
  > div {
    margin: 50px;
    padding: 20px;
    background: ${(props) => props.theme.colors.background};
    border-radius: 10px;

    @media ${Devices.laptop} {
      margin: 50px 200px;
    }

    @media ${Devices.laptopL} {
      margin: 50px 500px;
    }

    @media ${Devices.desktop} {
      margin: 50px 700px;
    }

    > h1 {
      font-size: 1.3rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.darkenp};
      margin-bottom: 20px;
      ${Mixin.flexSet('flex-start', 'center')}

      > span {
        margin-left: 10px;
      }
    }

    > div {
      margin: 10px 0;
      > h2 {
        font-size: 1.1rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.darkenp};
        margin-bottom: 10px;
        ${Mixin.flexSet('flex-start', 'center')};

        > span {
          margin-left: 10px;
        }
      }

      > div {
        > button {
          margin: 10px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default {
  Filter,
};
