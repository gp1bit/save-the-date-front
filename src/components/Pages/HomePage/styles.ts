import styled from 'styled-components';

export const Container = styled.header`
  background: var(--white);
  display: flex;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 8% 5% 0 0;
  max-width: 100%;

  @media (min-width: 700px) {
    margin: 29px 45px 0 0;
  }

  @media (min-width: 1500px) {
    margin: 39px 45px 0 0;
  }

  @media (min-width: 1800px) {
    margin: 59px 45px 0 0;
  }
`;

export const ProfileButton = styled.button`
  background-color: var(--white);
  border: none;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1128px;
  padding-top: 35%;

  @media (min-width: 700px) {
    padding-top: 50px;
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
    margin-top: 17%;
  }

  @media (min-width: 1500px) {
    margin-top: 22%;
  }

  @media (min-width: 1800px) {
    margin-top: 37%;
  }
`;

export const MenuBtn = styled.button`
  background-color: var(--blue);
  border-radius: 10px;
  border: none;
  color: var(--white);
  height: 35.71px;
  opacity: 0.75;
  width: 228px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (min-width: 700px) {
    font-size: 15px;
    width: 338px;
    height: 39px;
    margin-bottom: 10px;
  }

  @media (min-width: 1500px) {
    font-size: 16px;
    width: 438px;
    height: 45px;
    margin-bottom: 25px;
  }

  @media (min-width: 1800px) {
    font-size: 18px;
    width: 538px;
    height: 55px;
  }
`;
