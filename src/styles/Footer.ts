import styled from 'styled-components';
import { Devices, Mixin } from '@/common/theme';

const Footer = styled.footer`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.background};
  ${Mixin.shadowSet}

  >section {
    height: 100%;
    margin: 0 50px;
    ${Mixin.flexSet('center', 'center', 'column')}

    > div {
      &:first-child {
        font-size: 2rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.primary};

        > span {
          color: ${(props) => props.theme.colors.secondary};
        }
      }
    }
  }
`;

const FooterDeco = styled.div<{ position: string }>`
  position: absolute;

  @media ${Devices.mobileS} {
    ${(props) => props.position}: -100px;
    bottom: -50px;
  }

  @media ${Devices.tablet} {
    ${(props) => props.position}: -100px;
    bottom: -50px;
  }
`;

export default { Footer, FooterDeco };
