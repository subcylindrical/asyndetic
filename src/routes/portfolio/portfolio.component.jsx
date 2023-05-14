import { useSelector, useDispatch } from 'react-redux';
import { PortfolioWrapper, Paragraph, StyledLink } from './portfolio.styles';
import { THEME_ACTION_TYPES } from '../../store/theme/theme.types';
import { themeSelector } from '../../store/theme/theme.selectors';

const Portfolio = () => {
  const navThemeState = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <PortfolioWrapper>
      <h1>Welcome!</h1>
      <h2>The Portfolio page is currently under construction</h2>
      <Paragraph>
        For now, please feel free to check out my{' '}
        <StyledLink
          theme={navThemeState}
          to={'https://github.com/subcylindrical'}
          target={'_blank'}
        >
          GitHub
        </StyledLink>{' '}
        :)
      </Paragraph>
    </PortfolioWrapper>
  );
};

export default Portfolio;
