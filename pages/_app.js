import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';

import { Navigation } from 'components/navigation';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp
