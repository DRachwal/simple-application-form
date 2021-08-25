import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

import Card from '../Components/Card';
import Input from '../Components/Input';
import Alert from '../Components/Alert';

const ApplicationForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        content: ''
    });

    const [inputsError, setInputsError] = useState({
        name: false,
        email: false,
        content: false
    })

    const [secondsError, setSecondsError] = useState(false);
    const [company, setCompany] = useState('');

    const history = useHistory();
    const location = useLocation();
    
    useEffect(() => {
        const company = location.state && location.state.company;

        if(!company) {
            history.push('/');
        } else {
            setCompany(company);
            history.replace();

            axios
                .get('https://baconipsum.com/api/?type=all-meat&paras=2')
                .then(response => {
                    const newContent = response.data.join(' ');

                    setInputs(prevState => ({
                        ...prevState,
                        content: newContent
                    }))
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSecondsError(false);
        }, 6000);

        return () => {
            clearTimeout(timeout);
        } // Cleanup
    }, [secondsError]);


    const submitHandler = e => {
        e.preventDefault();

        // Check inputs validity
        const regName = /^[\s\p{L}]+ [\s\p{L}]+$/u;
        const regEmail = /^\S+@\S+$/;

        const errors = {
            name: !regName.test(inputs.name) && 'Wprowadź prawidłowe imię i nazwisko',
            email: !regEmail.test(inputs.email) && 'Wprowadź prawidłowy adres email',
            content: (inputs.content.trim().length === 0 || inputs.content.trim().length > 5000) && 'Wprowadź prawidłową treść zgłoszenia (1 - 5000 znaków)'
        }

        // Check time validity
        const seconds = new Date().getSeconds();
        const secondsError = (seconds > 9 && seconds < 20) || (seconds > 29 && seconds < 40) || seconds > 49;

        if(errors.name || errors.email || errors.content || secondsError) {
            secondsError && setSecondsError(true);
            setInputsError(errors);
            return;
        } else {
            // Validation success
            history.push({
                pathname: '/summary',
                state: {
                    formData: {
                        company,
                        ...inputs
                    }
                }
            })
        }
    }

    const changeHandler = e => {
        const { name, value } = e.target;

        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <section>
            {secondsError && <Alert type='danger' message='Zgłoszenie może zostać wysłane, gdy sekundy nie znajdują się w przedziale 10-19, 30-39, 50-59'/>}
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <Card title='Wypełnij zgłoszenie'>
                        <form onSubmit={submitHandler}>
                            <Input
                                label='Imię i nazwisko'
                                input={{type: 'text',
                                    name: 'name',
                                    id: 'name',
                                    value: inputs.name, 
                                    onChange: changeHandler }}
                                error={inputsError.name} 
                                />
                            <Input
                                label='Email'
                                input={{type: 'email',
                                    name: 'email',
                                    id: 'email',
                                    value: inputs.email, 
                                    onChange: changeHandler }}
                                error={inputsError.email} 
                                />
                            <div className='mb-3'>
                                <label htmlFor='content'>Treść zgłoszenia</label>
                                <textarea
                                    style={{ minHeight: '400px'}}
                                    className={`form-control ${inputsError.content && 'is-invalid'}`}
                                    name='content'
                                    id='content'
                                    value={inputs.content}
                                    onChange={changeHandler} />
                                {inputsError.content && <div className='invalid-feedback'>{inputsError.content}</div>}
                            </div>
                            
                            <button type='submit' className='btn btn-success'>Wyślij</button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default ApplicationForm;