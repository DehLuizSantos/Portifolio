import styled, { css } from "styled-components";

export const FooterWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.Foreground};
    width: 100%;
    height: 300px;
    margin: 20px 0;
    padding: 40px;
    text-align: center;
    h2 {
      font-size: 12px;
      margin-top: 10px;
      font-weight: bold;
      color: ${theme.colors.title};
      @media (min-width: ${theme.screen.md}px) {
        font-size: 22px;
      }
    }
    .footer-infos {
      display: flex;
      margin: 20px;
      color: ${theme.colors.text};
      justify-content: center;
    }
    .social-media {
      margin: 10px 10px;

      h3 {
        font-size: 16px;
        color: ${theme.colors.title};
        margin-left: 5px;
      }
      .divider {
        height: 2px;
        background-color: ${theme.colors.tertiary};
        width: 90px;
        margin: 2px auto 10px auto;
      }
      p {
        color: ${theme.colors.title};
        font-size: 10px;
        font-weight: bold;
      }
      .social-media-wrapper {
        display: flex;
        .social-media-icon {
          border-radius: 50%;
          margin-left: 8px;
          width: 30px;
          height: 30px;
        }
      }
    }
  `}
`;
