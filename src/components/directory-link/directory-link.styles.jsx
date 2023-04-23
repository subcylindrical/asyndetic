import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  text-align: start;
  width: 100px;
  height: 30px;

  &:hover {
    background-color: rgba(245, 39, 145, 0.24);
  }
`;
