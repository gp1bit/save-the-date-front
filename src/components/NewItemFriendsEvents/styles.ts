import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const InputItem = styled.input`
  border: none;
  border-bottom: 1px solid var(--blue);
  color: var(--black);
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 400;
  margin: 0 5px 18px 0;
  width: 100%;

  ::placeholder {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 400;
  }

  @media (min-width: 700px) {
    font-size: 13px;
    width: 100%;

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
