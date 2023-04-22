import { GlobalStyle } from '../../index.styles';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context.component';

const Portfolio = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Welcome to the Portfolio page!</h1>
    </div>
  );
};

export default Portfolio;
