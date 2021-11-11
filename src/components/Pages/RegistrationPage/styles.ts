import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: var(--blue);
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 20px auto;
  max-width: 1128px;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 90px 0 0 23px;
  width: 100%;

  @media (min-width: 700px) {
    margin: 20px 0 0 0px;
  }
`;

export const Title = styled.div`
  margin: 0 0 0px 18px;
  width: 100%;

  .title {
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .description {
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
  }

  @media (min-width: 700px) {
    margin: 0 0 0px 20px;

    .title {
      font-size: 15px;
      font-weight: 600;
    }

    .description {
      font-size: 14px;
    }
  }

  @media (min-width: 1500px) {
    margin: 0 0 0px 30px;

    .title {
      font-size: 18px;
    }

    .description {
      font-size: 17px;
    }
  }

  @media (min-width: 1800px) {
    margin: 0 0 0px 40px;

    .title {
      font-size: 21px;
    }

    .description {
      font-size: 20px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: space-between;
  margin-top: 20%;
  max-width: 1128px;

  @media (min-width: 700px) {
    width: 100%;
    align-items: center;
    margin-top: 10%;
  }

  @media (min-width: 1500px) {
    align-items: center;
    margin-top: 12%;
  }
`;

export const InputForm = styled.input`
  background-color: var(--white);
  border-radius: 10px;
  border: none;
  color: var(--graphite-light);
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-bottom: 27px;
  opacity: 0.75;
  padding: 5px 0px 5px 16px;
  width: 228px;
  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 700px) {
    width: 307px;
    font-size: 14px;
  }

  @media (min-width: 1500px) {
    height: 30px;
    width: 407px;
    font-size: 15px;
  }

  @media (min-width: 1800px) {
    height: 35px;
    width: 507px;
    font-size: 16px;
  }
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 15vh;
  justify-content: center;
  margin: 0 auto;
`;

export const ConcludedButton = styled.button`
  background-color: var(--graphite-light);
  border-radius: 10px;
  border: none;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  height: 30px;
  margin: 15px 0 30px 0;
  width: 95px;
  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 700px) {
    height: 35px;
    font-size: 11px;
    margin: 10px 0 20px 0;
  }

  @media (min-width: 1500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin: 10px 0 40px 0;
  }

  @media (min-width: 1800px) {
    height: 50px;
    width: 105px;
    font-size: 13px;
    margin: 25px 0 40px 0;
  }
`;

export const LoginButton = styled.button`
  background-color: var(--blue);
  border: none;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 27px;
  width: 240px;
  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 1500px) {
    font-size: 15px;
    width: 340px;
  }

  @media (min-width: 1800px) {
    font-size: 16px;
  }
`;
