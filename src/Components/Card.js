import PropTypes from 'prop-types';

const Card = ({title, children}) => {
    return (<div className='card'>
        <div className='card-header'>
            {title}
        </div>
        <div className='card-body'>
            {children}
        </div>
    </div>);
};

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default Card;