import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1128px;
  padding-top: 55%;

  @media (min-width: 700px) {
    padding-top: 124px;
  }
`;

export const HomeMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40%;
  max-width: 1128px;

  @media (min-width: 700px) {
    margin: 80px 0 15px;
  }

  @media (min-width: 1500px) {
    margin: 100px 0 25px;
  }

  @media (min-width: 1800px) {
    margin: 124px 0 35px;
  }
`;

export const LoginInput = styled.input`
  background-color: var(--white);
  border-radius: 10px;
  border: none;
  color: var(--graphite-light);
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  height: 30px;
  margin-bottom: 34px;
  opacity: 0.75;
  padding-left: 15px;
  transition: filter 0.2s;
  width: 228px;

  &:hover {
    filter: brightness(0.9);
  }

  @media (min-width: 700px) {
    height: 32px;
    width: 328px;
    font-size: 15px;
  }

  @media (min-width: 1500px) {
    height: 37px;
    width: 428px;
    font-size: 16px;
  }

  @media (min-width: 1800px) {
    height: 45px;
    width: 528px;
    font-size: 18px;
  }
`;

export const ContainerButton = styled.div`
  background-color: var(--blue);
  max-width: 1128px;
  padding-top: 10%;

  @media (min-width: 700px) {
    padding-top: 44px;
  }
`;

export const ConcludedButton = styled.button`
  background-color: var(--graphite-light);
  border-radius: 10px;
  border: none;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 500;
  height: 30px;
  margin: 10% 0 50% 0;
  width: 95px;
  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 700px) {
    font-size: 11px;
  }

  @media (min-width: 1500px) {
    width: 100px;
    height: 35px;
    font-size: 12px;
  }

  @media (min-width: 1500px) {
    width: 105px;
    height: 40px;
    font-size: 13px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 20vh;
  margin: 0 0px 15px 15px;

  @media (min-width: 700px) {
    margin: 0 0px 15px 25px;
  }

  @media (min-width: 1500px) {
    margin: 0 0px 25px 35px;
  }

  @media (min-width: 1800px) {
    margin: 50px 0px 0px 45px;
  }
`;

export const PreviousButton = styled.button`
  background-color: var(--blue);
  border: none;
`;
