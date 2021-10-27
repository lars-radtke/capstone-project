import { useEffect } from 'react';

export const useBackgroundColor = hour => {
    useEffect(() => {
        if (hour >= 18) {
            document.body.style.backgroundImage =
                'linear-gradient(180deg, rgba(41,32,140,1) 0%, rgba(19,134,203,1) 100%);';
        } else if (hour <= 8) {
            document.body.style.backgroundImage =
                'linear-gradient(180deg, rgba(95,205,255,1) 0%, rgba(175,173,255,1) 50%, rgba(255,149,228,1) 100%)';
        } else {
            document.body.style.backgroundImage =
                'linear-gradient(180deg, rgba(64,145,255,1) 0%, rgba(153,217,255,1) 50%, rgba(205,255,248,1) 100%)';
        }
    }, [hour]);
};
