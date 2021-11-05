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
`;

export const HomeMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-evenly;
  margin-top: 40%;
  max-width: 1128px;
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
`;

export const ResetPassword = styled.button`
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  background-color: var(--blue);
  border: none;
`;
