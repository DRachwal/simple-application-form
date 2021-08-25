import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import styles from './Backdrop.module.css';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
    return ReactDOM.createPortal(<div className={styles.backdrop} onClick={props.onClick}/>, portalElement)
};

Backdrop.propTypes = {
    onClick: PropTypes.func
}

export default Backdrop;