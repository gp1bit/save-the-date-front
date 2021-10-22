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
  margin: 0 auto;
  max-width: 1128px;
  padding-top: 33%;
`;

export const ContainerProfile = styled.div`
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
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  margin-top: 11%;
  max-width: 1128px;
  height: 32vh;
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid var(--gray);
  color: var(--black);
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 400;
  height: 25px;
  padding-left: 12px;
  width: 293px;
  margin-right: 3%;

  &placeholder {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 400;
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
