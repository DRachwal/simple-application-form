import { useState } from 'react';

const COMPANIES = [
    'XYZ Warszawa, Poland',
    'ABC Kraków, Poland',
    'RNQ Berlin, Germany'
];

const ChooseCompany = () => {
    const [company, setCompany] = useState();
    
    return <section>
        <form onSubmit={submitHandler}>
            <label htmlFor="companies">Wybierz oddział:</label>
            <select name="companies" id="companies" value={company} onChange={changeHandler}>
                {COMPANIES.map(company => <option key={company}>{company}</option>)}
            </select>
            <button>Wybierz</button>
        </form>
    </section>
}

export default ChooseCompany