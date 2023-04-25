import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 40px;
  padding-left: 10px;

  &:hover {
    /* background-color: rgba(245, 39, 145, 0.24); */
  }
`;
