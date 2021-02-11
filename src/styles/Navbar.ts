import styled from 'styled-components';
import { Devices, Mixin } from '@/common/theme';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.background};
  ${Mixin.flexSet('space-between', 'center')}
  ${Mixin.shadowSet}  

  > header {
    width: inherit;
    margin: 0 50px;

    @media ${Devices.mobileS} {
      ${Mixin.flexSet('center', 'center')}
    }

    @media ${Devices.tablet} {
      ${Mixin.flexSet('space-between', 'center')}
    }

    @media ${Devices.laptop} {
      margin: 0 200px;
    }

    @media ${Devices.laptopL} {
      margin: 0 500px;
    }

    @media ${Devices.desktop} {
      margin: 0 700px;
    }
  }
`;

const Logo = styled.div`
  ${Mixin.flexSet('flex-start', 'center')}

  > div {
    &:last-child {
      margin-left: 10px;
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.primary};
      > span {
        color: ${(props) => props.theme.colors.darkens};
      }
    }
  }
`;

const NavMenu = styled.div`
  a {
    @media ${Devices.mobileS} {
      display: none;
    }

    @media ${Devices.tablet} {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 700;
      display: block;
    }
  }
`;

export default {
  Nav,
  Logo,
  NavMenu,
};
