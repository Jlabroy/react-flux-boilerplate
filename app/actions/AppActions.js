import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppConstants } from '../constants/AppConstants';

export function editData(data) {
    AppDispatcher.handleViewAction({
        actionType: AppConstants.EDIT_DATA,
        data: data
    });
}
