import styled, { css } from "styled-components";

export const FooterWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundcolor};
    width: 100%;
    height: 300px;
    padding: 40px;
    text-align: center;
    h2 {
      font-size: 12px;
      margin-top: 10px;
      font-weight: bold;
      color: ${theme.colors.colorgreen};
      @media (min-width: ${theme.screen.md}px) {
        font-size: 22px;
      }
    }
    .footer-infos {
      display: flex;
      margin: 20px;
      color: ${theme.colors.lightWhite};
      justify-content: center;
    }
  `}
`;

export const SocialMediaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    .social-media-wrapper {
      display: flex;
      .social-media {
        margin: 10px 10px;

        h3 {
          font-size: 16px;
          color: ${theme.colors.lightWhite};
          margin-left: 5px;
          @media (min-width: ${theme.screen.md}px) {
            font-size: 21px;
          }
        }
        .divider {
          height: 2px;
          background-color: ${theme.colors.colorlightYellow};
          width: 90px;
          margin: 2px auto 10px auto;
          @media (min-width: ${theme.screen.md}px) {
            width: 110px;
          }
        }
        p {
          color: ${theme.colors.colorblue};
          font-size: 10px;
          font-weight: bold;
          @media (min-width: ${theme.screen.md}px) {
            font-size: 13px;
          }
        }
        a {
          margin: 2px;
        }
        img {
          @media (min-width: ${theme.screen.md}px) {
            width: 40px;
          }
        }
      }
    }
  `}
`;
