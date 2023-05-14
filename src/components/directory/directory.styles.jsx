import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 60px 60px 60px;
`;

export const DirectoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 100%;
  padding: 0 0 0 60px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  min-width: 40%;
`;

export const ImageWrapper = styled.div`
  padding-right: 60px;
`;

export const DirectoryImage = styled.img`
  max-height: 400px;
`;

export const DirectoyLinkContainer = styled.div`
  font-size: 24px;
  margin: 20px 20px;

  &:hover {
    color: var(--hover-font-color);
    cursor: pointer;
  }
`;
