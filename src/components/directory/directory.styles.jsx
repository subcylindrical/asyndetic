import styled from 'styled-components';

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

export const ImageContainer = styled.div`
  background-image: url('https://www.theacropolismuseum.gr/sites/default/files/exhibits_images/7719_2.jpg');
  background-image-size: ;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
