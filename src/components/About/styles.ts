import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.33;

  h1 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  div {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      margin-top: 8px;
      font-weight: bold;
      color: #3f51b5;
      transition: color 1s;

      &:hover {
        color: ${shade(0.2, '#3f51b5')};
      }
    }
  }
`;
