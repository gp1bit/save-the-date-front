import styled from 'styled-components';

export const Container = styled.header`
  background: var(--white);
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 40px;
  max-width: 1128px;
  padding-top: 33%;

  @media (min-width: 700px) {
    max-width: none;
    padding-top: 80px;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 1800px) {
    padding-top: 124px;
  }
`;

export const ContainerMyEvents = styled.div`
  background: var(--white);
  display: flex;
  height: 57vh;
  flex-direction: column;
  margin: 25% 0 10%;
  width: 100%;

  h1 {
    padding: 0 0 0 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .title {
    display: flex;
    justify-content: flex-start;
  }

  @media (min-width: 700px) {
    margin: 60px 0 0px;
    width: 100%;
    align-items: center;

    h1 {
      font-size: 16px;
    }
  }

  @media (min-width: 1500px) {
    margin: 75px 0 30px;

    h1 {
      font-size: 18px;
    }
  }

  @media (min-width: 1800px) {
    margin: 75px 0 0px;

    h1 {
      font-size: 20px;
    }
  }
`;

export const ContainerEvents = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  margin-top: 11%;
  max-width: 1128px;
  height: 32vh;

  @media (min-width: 700px) {
    margin-top: 60px;
  }

  @media (min-width: 1500px) {
    margin-top: 70px;
  }

  @media (min-width: 1800px) {
    margin-top: 80px;
  }
`;

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

export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 5vh;
  margin: 0 5%;
  padding-bottom: 10px;
`;

export const PreviousButton = styled.button`
  background-color: var(--white);
  border: none;
`;
