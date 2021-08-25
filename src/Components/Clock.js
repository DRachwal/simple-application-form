import { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date);
        }, 1000);
    
        return () => {
            clearInterval(interval);
        } // Cleanup
    }, []);

    return <span className='navbar-text'>{date.toLocaleString()}</span>
};

export default Clock;