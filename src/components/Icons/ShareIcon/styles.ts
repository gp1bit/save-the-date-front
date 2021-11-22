import styled from 'styled-components';

export const ShareIconImg = styled.img`
  max-height: 20px;
  max-width: 20px;

  @media (min-width: 700px) {
    max-height: none;
    max-width: none;
    width: 22px;
    height: 19px;
  }

  @media (min-width: 1500px) {
    width: 27px;
    height: 22px;
  }

  @media (min-width: 1800px) {
    width: 32px;
    height: 27px;
  }
`;
