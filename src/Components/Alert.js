import PropTypes from 'prop-types';

const Alert = ({ type, message }) => {
    return <div className={`alert alert-${type}`}>
        {message}
    </div>;

};

Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
}

export default Alert;