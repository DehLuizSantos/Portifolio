import styled, { css } from "styled-components";

export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding-top: 45px;
    h1 {
      color: ${theme.colors.lightWhite};
      font-size: 25px;
      line-height: 33px;
      font-weight: bold;
    }
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    .divider-line {
      height: 1px;
      width: 35%;
      margin: 0 15px;
      border: 1px solid #ff79c6;
      filter: blur(4px);
    }
  `}
`;
