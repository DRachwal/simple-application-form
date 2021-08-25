import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Summary = () => {
    const history = useHistory();
    const location = useLocation();
    const [summary, setSummary] = useState({});

    useEffect(() => {
        const formData = location.state && location.state.formData;

        if(!formData) {
            history.push('/');
        } else {
            setSummary(formData);
            history.replace();
        }
    }, []);

    return (
        <section>
            <div className='row'>
                <div className='col'>
                    <div className='text-center'>
                        <h2>Twoje zgłoszenie zostało wysłane!</h2>
                        <h4 className='mt-4'>Nazwa firmy</h4>
                        <p>{summary.company}</p>
                        <h4>Imię i nazwisko</h4>
                        <p>{summary.name}</p>
                        <h4>Email</h4>
                        <p>{summary.email}</p>
                        <h4>Zgłoszenie</h4>
                        <p style={{ textAlign: 'justify' }}>{summary.content}</p>
                        <Link to='/' className='btn btn-secondary'>Wróć</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;