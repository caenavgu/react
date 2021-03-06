import dispatcher from '../dispatchers/dispatcher.js';
import DevShuiAPIWapper from '../utils/DevShuiAPIWapper.js';


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

export function getProductsAction(){
    DevShuiAPIWapper.getProducts().then(function(productsList){
        dispatcher.dispatch({
            actionData: productsList,
            actionType: 'GET_PRODUCTS',
        });
    }).catch(function(err){
        console.log('Error in the getProducts request', err);
    });
}

export function getSingleProductAction(idProduct) {
    // body...
    DevShuiAPIWapper.getSingleProduct(idProduct).then(function(productInformation){
        dispatcher.dispatch({
            actionData: productInformation,
            actionType: 'GET_SINGLE_PRODUCT',
        });   
    }).catch(function(err){
        console.log('Error in the getSingleProduct request', err);
    });
}

export function postProductToCartAction(idUser, idProduct) {
    // body...
    DevShuiAPIWapper.postProductToCart(idProduct).then(function(productInformation){
        dispatcher.dispatch({
            actionData: productInformation,
            actionType: 'GET_SINGLE_PRODUCT',
        });   
    }).catch(function(err){
        console.log('Error in the getSingleProduct request', err);
    });
}