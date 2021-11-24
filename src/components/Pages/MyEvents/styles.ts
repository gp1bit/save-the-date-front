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

export const CreateButton = styled.button`
  background-color: var(--blue);
  border-radius: 10px;
  border: none;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 500;
  height: 30px;
  width: 95px;

  @media (min-width: 700px) {
    font-size: 11px;
    height: 35px;
    width: 105px;
  }

  @media (min-width: 1500px) {
    font-size: 13px;
    height: 40px;
    width: 115px;
  }

  @media (min-width: 1800px) {
    font-size: 14px;
    height: 50px;
    width: 125px;
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
