import styled, { css } from "styled-components";
import matrixCode from "../assets/matrix-code.gif";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 0 10vw;
    background-image: url(${matrixCode});
  `}
`;
