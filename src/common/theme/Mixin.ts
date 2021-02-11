import { css } from 'styled-components';

const flexSet = (
  justifyContent: string,
  alignItems: string,
  flexDirection: string | null = null
) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;

const shadowSet = css`
  box-shadow: -3px 5px 20px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -3px 5px 20px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -3px 5px 20px rgba(0, 0, 0, 0.2);
`;

export default {
  flexSet,
  shadowSet,
};
