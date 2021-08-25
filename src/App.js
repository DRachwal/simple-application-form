import { Fragment } from 'react';

import Navbar from './Components/Navbar/Navbar';
import ChooseCompany from './Views/ChooseCompany/ChooseCompany';

import './App.css';

const App = () => {
  return (
    <Fragment>
        <Navbar />
        <main>
          <ChooseCompany />
        </main>
    </Fragment>
  );
}

export default App;