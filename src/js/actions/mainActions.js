
import dispatcher from '../dispatchers/dispatcher';


/*
* This will start the flux flow to make a user login
*/
export function login(username, password){
    
    //Make the API call and handle the result
    
    //if and only if it was succesfull
    if(username=='pupu'){
        
        var theDataToBeSentWithinTheAction = {
            username: username,
            password: password
        }
        
        var theActionToBeDispatched = { actionType: 'LOGIN', actionData: theDataToBeSentWithinTheAction };
        dispatcher.dispatch(theActionToBeDispatched);
    }
    else if (username=='popo')
    {
        //if unsuccessfull then dispatch some other stuff
        var theActionToBeDispatched = { actionType: 'LOGIN_ERROR', actionData: null };
        dispatcher.dispatch(theActionToBeDispatched);
    }
}