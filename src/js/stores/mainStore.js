import EventEmmiter from 'events';
import DevShuiAPIWapper from '../utils/DevShuiAPIWapper.js';

import * as MainActions from '../actions/mainActions.js'
import Dispatcher from '../dispatchers/dispatcher.js';

class MainStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this._model = {
            signedIn: false,
            username: '',
            userid: 0,
            globalProductList: []
        };
    }
    setModel(modelToBeMerged){
        this._model = Object.assign(this._model, modelToBeMerged);
        this.emit('change');
    }
    
    getProducts(){
        return this._model.globalProductList;
    }
    
    handleActions(actionThatWasDispatched){
        console.log('We have received the action that was dispatched', actionThatWasDispatched);
        switch(actionThatWasDispatched.actionType)
        {
            case "LOGIN":
                var actionDataReceived = actionThatWasDispatched.actionData;
                this.setModel({ signedIn:true, username: actionDataReceived.username, userid: actionDataReceived.user_id });
            break;
            case "LOGIN_ERROR":
                this.setModel({ signedIn: false });
            break;
            
            case "GET_PRODUCTS":
                
                var theProducts = actionThatWasDispatched.actionData;
                this.setModel({globalProductList: theProducts });
            break;
            
        }
        
    }
    
    getSessionInfo(){
        return this._model.signedIn;
    }
    
}
var mainStore = new MainStore();
Dispatcher.register(mainStore.handleActions.bind(mainStore));
window.Dispatcher = Dispatcher;
export default mainStore;