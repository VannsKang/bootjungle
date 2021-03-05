import styled from 'styled-components';
import { Devices, Mixin } from '@/common/theme';

const Carousel = styled.section`
  height: 250px;
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;
  padding: 0 50px;
  ${Mixin.flexSet('space-between', 'center')}

  @media ${Devices.laptop} {
    padding: 0 200px;
  }

  @media ${Devices.laptopL} {
    padding: 0px 500px;
  }

  @media ${Devices.desktop} {
    padding: 0px 700px;
  }
`;

const Title = styled.div`
  div {
    font-weight: 700;
    &:first-child {
      font-size: 2.3rem;
      color: ${(props) => props.theme.colors.darkens};
    }
    &:last-child {
      line-height: 60px;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.primary};
      > span {
        color: ${(props) => props.theme.colors.darkens};
      }
    }
  }
`;

const Rankings = styled.section`
  margin: 0 50px;

  @media ${Devices.tablet} {
    ${Mixin.flexSet('space-between', 'center')};
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

  > div {
    width: 100%;
    margin: 0 10px;

    @media ${Devices.mobileS} {
      margin-bottom: 50px;
    }

    h2 {
      ${Mixin.flexSet('center', 'center')}
      font-size: 1.4rem;
      margin-bottom: 20px;
      color: ${(props) => props.theme.colors.darkenp};
    }
    table {
      width: inherit;
      border: 1px solid ${(props) => props.theme.colors.background};

      th {
        padding: 10px;
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.primary};
        font-weight: 700;
        /* &:nth-child(1) {
          width: 30px;
        } */
      }
      td {
        padding: 10px;
        text-align: center;
      }
    }
  }
`;

const MainContent = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 150px;

  > h1 {
    ${Mixin.flexSet('center', 'center')}
    font-size: 2.3rem;
    font-weight: 700;
    margin: 50px 0;
    color: ${(props) => props.theme.colors.primary};
  }

  > a {
    ${Mixin.flexSet('center', 'center')};
    margin: 50px;
    /* padding: 10px; */
  }
`;

const ListSection = styled.div`
  ${Mixin.flexSet('center', 'center')}
  >a {
    margin: 0 10px;
  }
`;

export default {
  MainContent,
  Carousel,
  Title,
  Rankings,
  ListSection,
};
