import toast from 'react-simple-toasts';
import './toastify.css';

const defaultTimeOut = 3000;
function triggerAlert(message, config) {
    toast(message, config);
}

export const toastify = {
    success: (message, timeout = defaultTimeOut) => {
        triggerAlert(message, {
            time: timeout,
            className: 'toastify-success',
        });
    },
    error: (message, timeout = defaultTimeOut) => {
        triggerAlert(message, {
            time: timeout,
            className: 'toastify-error',
        });
    },
};
