// const refresh = require('./postView/postView.js')

if(!navigator.serviceWorker) {
    Promise.resolve();
}

navigator.serviceWorker.register('/client/ServiceWorker/sw.js').then( reg => {
    if (!navigator.serviceWorker.controller) {
        return;
    }
    if (reg.waiting) {
        IndexController._onReady(reg.waiting);
        return;
    }
    if (reg.installing) {
        IndexController._trackInstallation(reg.installing);
        return;
    }
    reg.addEventListener('updatefound', function () {
        IndexController._trackInstallation(reg.installing);
    });
})

const indexController = this
class IndexController {
    static _onReady (worker) {
        display();

        refresh.addEventListener('click', function () {
            worker.postMessage({ action: 'skipWaiting' })
            toast.style.display = 'none'
        })
    }
    static _trackInstallation (worker) {
        worker.addEventListener('statechange', function () {
            if (worker.state == 'installed') {
                indexController._onReady()
            }
        });
    }
    static _openSocket () {

    }
}

IndexController.prototype._lostConnectionToast = null

// ws.close()
IndexController.prototype._openSocket = function () {
    const dUrl = location;
    dUrl.protocol = 'ws'
    const ws = new WebSocket(dUrl.href);

    ws.addEventListener('close', function () {
        if (IndexController._lostConnectionToast) {
            displayRetry()
        }
    })
}