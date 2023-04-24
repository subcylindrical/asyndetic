import { Fragment, useEffect, useState } from 'react';
import Letter from './letter.component';
import { StyledLink } from './directory-link.styles';

const DirectoryLink = ({ title }) => {
  const [builtTitle, setBuiltTitle] = useState('');
  const [buildTitleInterval, setBuildTitleInterval] = useState('');

  const generateBuiltTitle = (title) => {
    console.log(`i am the ${title}`);
    clearInterval(buildTitleInterval);
    setBuildTitleInterval(
      setInterval(() => {
        setBuiltTitle({
          renderTitle: title.split('').map((letter) => {
            return (
              <Letter
                letter={letter}
                key={letter.charCodeAt(0) * Math.random()}
              />
            );
          }),
          isRebuilding: true,
        });
      }, 50)
    );
  };

  const resetBuiltTitle = (title) => {
    console.log(buildTitleInterval);
    clearInterval(buildTitleInterval);
    setBuildTitleInterval(null);
    setBuiltTitle({ renderTitle: title, isRebuilding: false });
    console.log('mouse off');
  };

  return (
    <StyledLink
      onMouseLeave={() => resetBuiltTitle(title)}
      onMouseEnter={() => generateBuiltTitle(title)}
      to={`/${title}`}
    >
      {builtTitle.renderTitle}
    </StyledLink>
  );
};

export default DirectoryLink;
