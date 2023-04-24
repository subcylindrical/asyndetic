import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  width: 150px;
  height: 60px;
  padding-left: 10px;

  &:hover {
    background-color: rgba(245, 39, 145, 0.24);
  }
`;
