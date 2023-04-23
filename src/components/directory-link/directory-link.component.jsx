import { Fragment, useEffect, useState } from 'react';
import Letter from './letter.component';
import { StyledLink } from './directory-link.styles';

const DirectoryLink = ({ title }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [returnLink, setReturnLink] = useState('');
  let shuffleInterval = null;
  useEffect(() => {
    if (mouseOver) {
      console.log('link hovered');
      console.log(mouseOver);
      shuffleInterval = setInterval(() => {
        console.log('interval set');
        setReturnLink(
          <Fragment>
            {title.split('').map((letter) => {
              return (
                <Letter
                  letter={letter}
                  key={letter.charCodeAt(0) * Math.random()}
                />
              );
            })}
          </Fragment>
        );
      }, 50);
      return () => clearInterval(shuffleInterval);
    } else {
      console.log(mouseOver);
      clearInterval(shuffleInterval);
    }
  }, [mouseOver]);

  return (
    <StyledLink
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
      to={`/${title}`}
    >
      {title.split('').map((letter) => {
        return (
          <Letter letter={letter} key={letter.charCodeAt(0) * Math.random()} />
        );
      })}
    </StyledLink>
  );
};

export default DirectoryLink;
