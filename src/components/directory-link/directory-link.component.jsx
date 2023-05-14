import { useState } from 'react';
import Letter from './letter.component';
import { StyledLink } from './directory-link.styles';

const DirectoryLink = ({ title }) => {
  const [builtTitle, setBuiltTitle] = useState(title);
  const [buildTitleInterval, setBuildTitleInterval] = useState(null);
  let INTERVAL_SPEED = 60;

  (() => {
    if (navigator.userAgent.match(/fox/g)) {
    }
  })();

  console.log(INTERVAL_SPEED);

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
      }, INTERVAL_SPEED)
    );
  };

  const removeInterval = () => {
    clearInterval(buildTitleInterval);
    setBuildTitleInterval(null);
    resetTitle();
  };

  const resetTitle = () => {
    setBuiltTitle(title);
    console.log('resetting title');
  };

  return (
    <StyledLink
      onMouseEnter={(e) => {
        console.log('mouse enter');
        generateSetBuildTitleInterval(e);
      }}
      onMouseLeave={() => {
        console.log('mouse leaving');
        removeInterval();
      }}
      to={`/${title}`}
    >
      {builtTitle}
    </StyledLink>
  );
};

export default DirectoryLink;
