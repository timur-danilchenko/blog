import 'shared/styles/index.scss';

import { Router } from 'app/router';
import { Navbar } from 'widgets/NavBar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
};
