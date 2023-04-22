import Directory from '../../components/directory/directory.component';
import { GlobalStyle } from '../../index.styles';

const Home = () => {
  return (
    <div>
      <GlobalStyle dark={'#1f1f1f'} />
      <h1>I am the home</h1>
      <Directory />
    </div>
  );
};

export default Home;
