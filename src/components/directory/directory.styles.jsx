import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DirectoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60%;
  margin: 50px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #bab1b1;
`;

export const DirectoryImage = styled.img`
  height: 550px;
`;

export const DirectoyLinkContainer = styled.div`
  font-size: 20px;
  margin: 20px 20px;

  &:hover {
    color: green;
    cursor: pointer;
  }
`;
