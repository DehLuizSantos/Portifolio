import styled, { css } from "styled-components";

export const ContainerAbout = styled.div`
  ${({ theme }) => css`
    padding-bottom: 150px;
    background: linear-gradient(
      180deg,
      #0c061e 0%,
      rgba(10, 5, 24, 0.8) 100%,
      rgba(10, 5, 24, 0) 100%
    );
    .position-desktop {
      @media (min-width: ${theme.screen.md}px) {
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `}
`;

export const SocialMedia = styled.div`
  ${({ theme }) => css`
    margin: 55px 0;
    text-align: center;
    .social-media {
      margin: 10px auto;
      border-radius: 10px;
      height: 60px;
      width: 250px;
      border: 2px solid ${theme.colors.colormagenta};
      a {
        img {
          margin: 10px;
          &:hover {
            box-shadow: 0 0 30px ${theme.colors.colormagenta};
          }
        }
      }
    }
    @media (min-width: ${theme.screen.md}px) {
      margin-left: auto;
    }
  `}
`;

export const ProfileInfos = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.colorblack};
    margin: 10px 35px;
    border-radius: 10px;
    padding: 20px;

    @media (min-width: ${theme.screen.lg}px) {
      padding-left: 25px;
      padding-top: 25px;
      margin: 0 auto;
    }
    .purple {
      color: ${theme.colors.colorpurpleUltraLight};
    }
    span {
      font-size: 12px;
      @media (min-width: ${theme.screen.md}px) {
        font-size: 18px;
      }
    }
    .info {
      margin-left: 25px;
      line-height: 15px;
      @media (min-width: ${theme.screen.md}px) {
        margin-left: 65px;
        line-height: 35px;
      }

      .orange {
        color: ${theme.colors.colororange};
      }
      .magento-light {
        color: ${theme.colors.colorlightMagenta};
      }
      .magento {
        color: ${theme.colors.colormagenta};
        text-transform: capitalize;
      }
      .blue {
        color: ${theme.colors.colorblue};
      }
    }
  `}
`;
