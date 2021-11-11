import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background: var(--blue);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 158px auto;
  max-width: 1128px;

  @media (min-width: 700px) {
    margin: 100px auto;
  }

  @media (min-width: 1500px) {
    margin: 150px auto;
  }

  @media (min-width: 1800px) {
    margin: 200px auto;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0px 0 0 23px;
  width: 100%;
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
    padding-bottom: 2px;
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

export const MenuLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: space-between;
  margin-top: 20%;
  max-width: 1128px;
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
    height: 35px;
    width: 407px;
    font-size: 15px;
  }

  @media (min-width: 1800px) {
    height: 40px;
    width: 507px;
    font-size: 16px;
  }
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  padding: 0 15px;
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
    margin: 30px 0 40px 0;
  }

  @media (min-width: 1800px) {
    height: 50px;
    width: 105px;
    font-size: 13px;
    margin: 40px 0 40px 0;
  }
`;

export const PreviousButton = styled.button`
  background-color: var(--blue);
  border: none;

  @media (min-width: 700px) {
    margin: 0 20px 25px 20px;
  }
`;
