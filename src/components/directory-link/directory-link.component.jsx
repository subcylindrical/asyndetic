import { Fragment, useEffect, useState } from 'react';
import Letter from './letter.component';
import { StyledLink } from './directory-link.styles';

const DirectoryLink = ({ title }) => {
  const [builtTitle, setBuiltTitle] = useState(title);
  const [buildTitleInterval, setBuildTitleInterval] = useState(null);

  const generateBuiltTitle = () => {
    setBuiltTitle(
      title.split('').map((letter) => {
        return (
          <Letter letter={letter} key={letter.charCodeAt(0) * Math.random()} />
        );
      })
    );
  };

  const generateSetBuildTitleInterval = () => {
    if (buildTitleInterval != null) return;
    setBuildTitleInterval(
      setInterval(() => {
        generateBuiltTitle();
      }, 50)
    );
  };

  const removeInterval = () => {
    clearInterval(buildTitleInterval);
    setBuildTitleInterval(null);
    resetTitle();
  };

  const resetTitle = () => {
    setBuiltTitle(title);
  };

  return (
    <StyledLink
      onMouseEnter={() => {
        generateSetBuildTitleInterval();
        console.log('mouse over');
      }}
      onMouseLeave={() => {
        removeInterval();
        console.log('mouse off');
      }}
      to={`/${title}`}
    >
      {builtTitle}
    </StyledLink>
  );
};

export default DirectoryLink;
