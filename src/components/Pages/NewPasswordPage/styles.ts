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
  margin: 158px auto;
  max-width: 1128px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  margin: 0px 0 40px 23px;
  width: 100%;
`;

export const Title = styled.div`
  margin: 0px 0 0px 18px;
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
`;

export const PreviousButton = styled.button`
  background-color: var(--blue);
  border: none;
`;
