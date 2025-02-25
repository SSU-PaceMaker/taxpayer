import { MenuOpenReducer } from './MenuOpenReducer';
import { combineReducers } from 'redux';
import user from './user_reducer';
import classInfo from './class_reducer'
import classUser from './class_user'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig={
    key:'root',
    storage,//localstorage에 저장
    whitelist:['classInfo','classUser']//classInfo만 localstorage에 저장
}

export const Reducers = persistReducer(persistConfig,combineReducers({
    user,
    classInfo,
    classUser,
    menuState: MenuOpenReducer
}));
