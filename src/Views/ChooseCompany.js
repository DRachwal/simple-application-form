import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../Components/Card';

const COMPANIES = [
    'XYZ Warszawa, Poland',
    'ABC Kraków, Poland',
    'RNQ Berlin, Germany'
];

const ChooseCompany = () => {
    const [company, setCompany] = useState(COMPANIES[0]);
    const history = useHistory();

    const submitHandler = e => {
        e.preventDefault();
        history.push({
            pathname: '/application',
            state: {
                company: company
            }
        }); // Push to application form view
    }

    const changeHandler = e => {
        const value = e.target.value;
        setCompany(value);
    }

    return (
        <section>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <Card title='Wybierz oddział'>
                        <form onSubmit={submitHandler}>
                            <div className='mb-3'>
                                <select className='form-control' name='companies' id='companies' value={company} onChange={changeHandler}>
                                    {COMPANIES.map(company => <option key={company} value={company}>{company}</option>)}
                                </select>
                            </div>
                            <button type='submit' className='btn btn-success'>Wybierz</button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default ChooseCompany