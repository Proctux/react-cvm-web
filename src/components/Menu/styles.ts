import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #3f51b5;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  img {
    height: 80px;
    width: 80px;
    margin-left: 16px;
  }

  div {
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 24px;

    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 20px;
      margin-right: 32px;
      transition: color 1s;

      & + a {
        margin-right: 32px;
      }

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
`;
