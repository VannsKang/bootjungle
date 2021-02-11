import styled from 'styled-components';
import { Devices, Mixin } from '@/common/theme';

const Headers = styled.header`
  margin-top: 50px;

  @media ${Devices.mobileS} {
    ${Mixin.flexSet('center', 'center', 'column')}
  }

  @media ${Devices.tablet} {
    ${Mixin.flexSet('space-between', 'flex-start', 'row')}
  }

  section {
    &:first-child {
      width: 30%;
      margin-bottom: 50px;

      @media ${Devices.tablet} {
        margin-right: 50px;
      }

      > img {
        width: 100%;
        height: auto;
      }
    }
    &:last-child {
      @media ${Devices.tablet} {
        width: 70%;
      }

      > div {
        ${Mixin.flexSet('flex-start', 'flex-end')}
        margin-bottom: 30px;

        > h1 {
          font-size: 2.3rem;
          font-weight: 700;
          margin-right: 10px;
          color: ${(props) => props.theme.colors.darkenp};
        }

        > h4 {
          font-size: 1.7rem;
          font-weight: 700;
          color: ${(props) => props.theme.colors.primary};
        }
      }

      table {
        border-top: 1px solid ${(props) => props.theme.colors.alter};
        tr {
          border-bottom: 1px solid #eee;
          th {
            color: ${(props) => props.theme.colors.secondary};
            width: 30%;
            font-weight: 700;
            text-align: left;
          }

          td {
            padding: 20px 0;
          }
        }
      }
    }
  }
`;

const Filter = styled.section`
  > div {
    margin: 50px;
    padding: 30px;
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
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.darkenp};
      margin-bottom: 30px;

      > span {
        margin-left: 10px;
      }
    }

    > div {
      margin: 20px 0;
      > h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.darkenp};
        margin-bottom: 20px;
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

const Details = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 150px;

  > div {
    margin: 50px 50px;

    @media ${Devices.mobileS} {
      /* width: 100%; */
      margin: 50px 50px;
    }

    @media ${Devices.laptop} {
      margin: 50px 200px;
    }

    @media ${Devices.laptopL} {
      margin: 50px 500px;
    }

    @media ${Devices.desktop} {
      margin: 50px 700px;
    }
  }
`;

export default {
  Details,
  Headers,
  Filter,
};
