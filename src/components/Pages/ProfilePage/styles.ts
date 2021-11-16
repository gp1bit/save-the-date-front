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

  @media (min-width: 700px) {
    padding-top: 80px;
  }

  @media (min-width: 1800px) {
    padding-top: 134px;
  }
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

  @media (min-width: 700px) {
    margin: 40px 0 10px;

    h1 {
      font-size: 16px;
    }
  }

  @media (min-width: 1500px) {
    margin: 50px 0 53px;

    h1 {
      font-size: 17px;
    }
  }

  @media (min-width: 1800px) {
    margin: 47px 0 53px;

    h1 {
      font-size: 19px;
    }
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

  @media (min-width: 700px) {
    margin-top: 27px;
  }
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const EditButton = styled.button`
  background-color: var(--white);
  border: none;
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

  ::placeholder {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 400;
  }

  @media (min-width: 700px) {
    height: 25px;
    width: 393px;
    font-size: 11px;

    ::placeholder {
      font-size: 11px;
    }
  }

  @media (min-width: 1500px) {
    height: 30px;
    width: 493px;
    font-size: 12px;

    ::placeholder {
      font-size: 12px;
    }
  }

  @media (min-width: 1800px) {
    height: 35px;
    width: 593px;
    font-size: 13px;

    ::placeholder {
      font-size: 13px;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 43px 25px 0 0;

  @media (min-width: 700px) {
    padding: 43px 0px 13 0px;
  }

  @media (min-width: 1500px) {
    padding: 84px 0 13px 0px;
  }

  @media (min-width: 1800px) {
    padding: 94px 0 13px 0px;
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
  height: 25px;
  width: 75px;

  @media (min-width: 700px) {
    font-size: 11px;
    height: 30px;
    width: 90px;
  }

  @media (min-width: 1500px) {
    font-size: 13px;
    height: 35px;
    width: 100px;
  }

  @media (min-width: 1800px) {
    font-size: 14px;
    height: 40px;
    width: 110px;
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
