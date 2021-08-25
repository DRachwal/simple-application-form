import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './Components/Navbar';
import ChooseCompany from './Views/ChooseCompany';
import ApplicationForm from './Views/ApplicationForm';
import Summary from './Views/Summary'
import PrivacyPolicy from './Views/PrivacyPolicy';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Fragment>
        <Navbar />
        <main>
            <div className='container'>
                <Switch>
                    <Route path='/privacy-policy'>
                        <PrivacyPolicy />
                    </Route>
                    <Route path='/application'>
                        <ApplicationForm />
                    </Route>
                    <Route path='/summary'>
                        <Summary/>
                    </Route>
                    <Route path='/'>
                        <ChooseCompany />
                    </Route>
                    <Redirect to='/' />
                </Switch>
            </div>
        </main>
    </Fragment>
  );
}

export default App;
