import styled from 'styled-components';

export const Container = styled.header`
  background: var(--white);
  display: flex;
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
  }

  @media (min-width: 1500px) {
    padding-top: 90px;
  }

  @media (min-width: 1800px) {
    padding-top: 124px;
  }
`;

export const ContainerMyEvents = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin: 69.89px 57px 64px 30px;
  width: 100%;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 0 0 0 6px;
  }

  .title {
    display: flex;
    justify-content: flex-start;
  }

  @media (min-width: 700px) {
    align-items: center;
    width: 100%;
    max-width: none;
    height: 100vh;

    h1 {
      font-size: 16px;
    }
  }

  @media (min-width: 1500px) {
    h1 {
      font-size: 18px;
    }
  }

  @media (min-width: 1800px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const ContainerEvents = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  height: 32vh;
  margin-top: 11%;
  max-width: 1128px;

  @media (min-width: 700px) {
    margin-top: 39px;
  }

  @media (min-width: 1500px) {
    margin-top: 59px;
  }

  @media (min-width: 1800px) {
    margin-top: 49px;
  }
`;

export const ContainerElements = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`;

export const DivEvento = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  border: 1px solid var(--graphite);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin-left: 13px;
  padding: 0 15px 15px 26px;
  width: 85%;

  h3 {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  @media (min-width: 700px) {
    width: 340px;

    h3 {
      font-size: 16px;
    }
  }

  @media (min-width: 1500px) {
    width: 390px;

    h3 {
      font-size: 19px;
    }
  }

  @media (min-width: 1800px) {
    width: 410px;

    h3 {
      font-size: 20px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--blue);
  color: var(--black);
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 400;
  width: 284px;
  margin-right: 11px;

  ::placeholder {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
  }

  @media (min-width: 700px) {
    width: 100%;
    font-size: 13px;

    ::placeholder {
      font-size: 13px;
    }
  }

  @media (min-width: 1500px) {
    font-size: 14px;

    ::placeholder {
      font-size: 14px;
    }
  }

  @media (min-width: 1800px) {
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
    }
  }
`;

export const ItemsContainer = styled.div`
  margin: 28px 0 8px;

  .inputs-container {
    display: flex;
    flex: row;
  }
`;

export const ItemNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h4 {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
    margin-bottom: 25px;
  }

  @media (min-width: 700px) {
    h3 {
      font-size: 13px;
    }
  }

  @media (min-width: 1500px) {
    h3 {
      font-size: 14px;
    }
  }

  @media (min-width: 1800px) {
    h3 {
      font-size: 15px;
    }
  }
`;

export const InputItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputItem = styled.input`
  border: none;
  border-bottom: 1px solid var(--blue);
  color: var(--black);
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 400;
  margin: 9px 5px 0px 0;
  width: 95px;
  height: 20px;

  ::placeholder {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
  }

  @media (min-width: 700px) {
    font-size: 13px;
    width: 90%;

    ::placeholder {
      font-size: 13px;
    }
  }

  @media (min-width: 1500px) {
    font-size: 14px;

    ::placeholder {
      font-size: 14px;
    }
  }

  @media (min-width: 1800px) {
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
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
  align-items: flex-end;
  margin: 34px 10px 5px 15px;
  padding-bottom: 10px;
  width: 100%;
`;

export const PreviousButton = styled.button`
  background-color: var(--white);
  border: none;
`;
