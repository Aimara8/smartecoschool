import PropTypes from 'prop-types';
import '../Modal/Modal.css';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, title, content }) => {
    
    const { t } = useTranslation();
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2><br/>
                <p>{content}</p>
                <button onClick={onClose}>{t('more.close')}</button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Modal;