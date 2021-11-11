import styled from 'styled-components';

export const CalendarIconImg = styled.img`
  max-height: 24px;
  max-width: 24px;

  @media (min-width: 700px) {
    max-height: none;
    max-width: none;
    width: 31px;
    height: 28px;
  }

  @media (min-width: 1500px) {
    width: 41px;
    height: 38px;
  }

  @media (min-width: 1800px) {
    width: 46px;
    height: 43px;
  }
`;
