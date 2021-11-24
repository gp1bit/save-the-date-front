import styled from 'styled-components';

export const ContainerElements = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  @media (min-width: 700px) {
    justify-content: center;
    margin: 0 10px;
  }
`;

export const DivEvento = styled.button`
  border-radius: 5px;
  border: 1px solid var(--graphite);
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: center;
  padding: 0 15px 15px 26px;
  width: 243px;
  background-color: var(--white);
  margin: 0 51px 0 13px;

  h4 {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 500;
  }

  p {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
    padding-bottom: 5px;
  }

  @media (min-width: 700px) {
    margin: 0 26px;
    height: 77px;
    width: 243px;

    h4 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 1500px) {
    margin: 0 27px;
    height: 79px;
    width: 300px;

    h4 {
      font-size: 15px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (min-width: 1800px) {
    margin: 0 28px;
    height: 82px;
    width: 340px;

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const ShareButton = styled.button`
  background-color: var(--white);
  border: none;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 25px 0 0;

  @media (min-width: 1500px) {
    padding: 84px 0;
  }

  @media (min-width: 8) {
    padding: 94px 0;
  }
`;
