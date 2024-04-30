import React from 'react'
import styles from './PopUpNeoMorph.module.css'

const PopUpNeoMorph = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='Modal'>
            <button className='TogglePopUp' onClick={togglePopUp}>Triger NeoMorphPopUp</button>
            {isOpen && (
                <div className={styles.modalBackground} onClick={closeModal}>
                    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.imag}></div>
                        <h4>Website Name</h4>
                        <p className={styles.slogan}>Your Slogan!</p>
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
export default PopUpNeoMorph
