import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppConstants } from '../constants/AppConstants';

let _app = {
   data: ''
};

class AppStoreClass extends EventEmitter {
    addChangeListener(cb) {
        this.on('change', cb);
    }

    removeChangeListener(cb) {
        this.removeChangeListener(cb);
    }

    getApp() {
        return _app;
    }
}

const AppStore = new AppStoreClass();

AppDispatcher.register((payload) => {
   const action = payload.action;

    switch (action.actionType) {
        case AppConstants.EDIT_DATA:
            _app.date = action.data;
            break;
        default:
            return true;
    }

    AppStore.emit('change');
});

export default AppStore;
