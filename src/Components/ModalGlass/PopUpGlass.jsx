import React from 'react'
import styles from './PopUpGlass.module.css'

const PopUpGlass = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='Modal'>
            <button className='TogglePopUp' onClick={togglePopUp}>Trigle GlassPopUp</button>
            {isOpen && (
                <div className={styles.modalBackground} onClick={closeModal}>
                <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                    <h3>Login</h3>
                    <input type="text" placeholder="&#128100; Username" />
                    <input type="password" placeholder='&#128274; Password' />
                    <button>Login</button>
                    <p>Forgot Password? <span>or</span> Sign up</p>
                </div>
            </div>
            )}
        </div>
    );
}
export default PopUpGlass
