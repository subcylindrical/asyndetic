import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  size: 25px;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  size: 30px;
  color: #272727;
`;
