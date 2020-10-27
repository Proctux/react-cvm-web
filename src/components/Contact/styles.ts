import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.33;

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
  }

  div {
    display: flex;
    margin-bottom: 16px;

    svg {
      margin-right: 16px;
    }
  }
`;
