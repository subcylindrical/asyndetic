import { PortfolioWrapper, Paragraph, StyledLink } from './portfolio.styles';

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <h1>Welcome!</h1>
      <h2>The Portfolio page is currently under construction</h2>
      <Paragraph>
        For now, please feel free to check out my{' '}
        <StyledLink to={'https://github.com/subcylindrical'} target={'_blank'}>
          GitHub
        </StyledLink>{' '}
        :)
      </Paragraph>
    </PortfolioWrapper>
  );
};

export default Portfolio;
