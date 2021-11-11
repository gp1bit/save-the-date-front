import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  display: flex;
  height: 100vh;
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

  @media (min-width: 1500px) {
    padding-top: 184px;
  }

  @media (min-width: 1800px) {
    padding-top: 244px;
  }
`;

export const HomeMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-evenly;
  margin-top: 40%;
  max-width: 1128px;

  @media (min-width: 700px) {
    justify-content: space-around;
    margin-top: 25%;
  }

  @media (min-width: 1500px) {
    height: 200px;
    justify-content: space-around;
    margin-top: 22%;
  }

  @media (min-width: 1800px) {
    justify-content: space-around;
    height: 233px;
    margin-top: 30%;
  }
`;

export const MenuBtn = styled.button`
  background-color: var(--white);
  border-radius: 10px;
  border: none;
  color: var(--graphite-light);
  height: 30px;
  opacity: 0.75;
  width: 228px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (min-width: 700px) {
    height: 35px;
    font-size: 15px;
    width: 350px;
  }

  @media (min-width: 1500px) {
    height: 40px;
    font-size: 18px;
    width: 450px;
  }

  @media (min-width: 1800px) {
    height: 50px;
    font-size: 20px;
    width: 550px;
  }
`;

export const ResetPassword = styled.button`
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  background-color: var(--blue);
  border: none;

  @media (min-width: 700px) {
    font-size: 14px;
  }

  @media (min-width: 1500px) {
    font-size: 15px;
  }

  @media (min-width: 1800px) {
    font-size: 18px;
  }
`;
