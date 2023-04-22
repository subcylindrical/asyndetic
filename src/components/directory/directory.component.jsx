import { Link } from 'react-router-dom';
import karyatid from './directory-images/directory-image-karyatid.png';

import {
  DirectoryContainer,
  PageContainer,
  LinksContainer,
  DirectoryImage,
  DirectoyLinkContainer,
} from './directory.styles';

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
    title: 'more',
  },
];

const Directory = () => {
  return (
    <PageContainer>
      <DirectoryContainer>
        <DirectoryImage src={karyatid} />
        <LinksContainer>
          {directoryPages.map((page) => (
            <DirectoyLinkContainer key={page.id}>
              <Link to={`/${page.title}`}>{page.title}</Link>
            </DirectoyLinkContainer>
          ))}
        </LinksContainer>
      </DirectoryContainer>
    </PageContainer>
  );
};

export default Directory;
