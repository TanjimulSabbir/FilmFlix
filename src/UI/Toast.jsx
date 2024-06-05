import { useState, useEffect } from 'react';
import '../style/toast.css';
import toast from 'react-hot-toast';

const Toast = ({ message, show, duration }) => {
    const [visible, setVisible] = useState(show);
   
    useEffect(() => {
        if (show) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show, duration]);

    return (
        <div className={`customToast ${visible ? 'show' : ''}`}>
            <div className="alertInfo">
                <span>{"Toast found!"}</span>
            </div>
        </div>
    );
};

export default Toast;
