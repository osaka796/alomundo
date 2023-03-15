window.onload = () => {
    'use strict';

    if ('serviceworker' in navigator) {
        navigator.serviceWorker
                 .register('./sw.js');
    }
}