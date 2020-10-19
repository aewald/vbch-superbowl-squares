import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';

import { Navbar } from 'components/navigation';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp
