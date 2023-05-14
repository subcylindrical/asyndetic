import me from './directory-images/profile-photo-min.png';

import {
  DirectoryContainer,
  PageContainer,
  LinksContainer,
  DirectoryImage,
  DirectoyLinkContainer,
  ImageWrapper,
} from './directory.styles';

import DirectoryLink from '../directory-link/directory-link.component';

const directoryPages = [
  {
    id: 1,
    title: 'portfolio',
  },
  {
    id: 2,
    title: 'about-me',
  },
  {
    id: 3,
    title: 'contact-me',
  },
];

const Directory = () => {
  return (
    <PageContainer>
      <DirectoryContainer>
        <ImageWrapper>
          <DirectoryImage src={me} />
        </ImageWrapper>
        <LinksContainer>
          {directoryPages.map((page) => (
            <DirectoyLinkContainer key={page.id}>
              <DirectoryLink title={page.title} />
            </DirectoyLinkContainer>
          ))}
        </LinksContainer>
      </DirectoryContainer>
    </PageContainer>
  );
};

export default Directory;
