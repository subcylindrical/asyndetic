import { Link } from 'react-router-dom';

import {
  DirectoryContainer,
  PageContainer,
  ImageContainer,
  LinkContainer,
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
        <img src='https://www.theacropolismuseum.gr/sites/default/files/exhibits_images/7719_2.jpg' />
        <LinkContainer>
          {directoryPages.map((page) => (
            <div key={page.id}>
              <Link to={`/${page.title}`}>{page.title}</Link>
            </div>
          ))}
        </LinkContainer>
      </DirectoryContainer>
    </PageContainer>
  );
};

export default Directory;
