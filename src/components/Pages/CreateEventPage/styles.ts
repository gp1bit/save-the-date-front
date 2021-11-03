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
`;

export const ContainerEvents = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  /* justify-content: space-between; */
  margin-top: 11%;
  max-width: 1128px;
  height: 32vh;
`;

export const ContainerElements = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const DivEvento = styled.button`
  border-radius: 5px;
  border: 1px solid var(--graphite);
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: flex-start;
  padding: 0 15px 15px 26px;
  width: 243px;
  background-color: var(--white);

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
  }
`;

export const ShareButton = styled.button`
  background-color: var(--white);
  border: none;
`;

export const ContainerButton = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: center;
  padding-right: 25px;
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
