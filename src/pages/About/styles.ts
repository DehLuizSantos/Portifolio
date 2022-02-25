import styled, { css } from "styled-components";

export const ContainerAbout = styled.div`
  ${({ theme }) => css`
    height: 120vh;
    background: linear-gradient(
      180deg,
      #0c061e 0%,
      rgba(10, 5, 24, 0.8) 100%,
      rgba(10, 5, 24, 0) 100%
    );
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
  `}
`;

export const ProfileInfos = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.colorblack};
    margin: 10px auto;
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    height: 340px;
    .purple {
      color: ${theme.colors.colorpurpleUltraLight};
    }
    span {
      font-size: 13px;
    }
    .info {
      margin-left: 25px;
      line-height: 25px;

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
