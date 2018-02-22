import * as mainActions from '../actions/mainActions.js';

var DevShuiAPIWapper = {
        // *runtime* context of which API to call
        _pendingPromises: [],
      
        _removePendingPromise: function(element) {
            const index = this._pendingPromises.indexOf(element);
            this._pendingPromises.splice(index, 1);
        },
        
        
        _addPendingPromise: function(element) {
            this._pendingPromises.push(element);
        },
        
        getPendingStatus: function() {
            return (this._pendingPromises.length == 0);
        },
      
        //Returns a promise with the request that was made
        callMethod: function(methodType, url, requestBodyData = '') {
            
            var callPromise = new Promise((resolve, reject)=>{
            
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = (response) => {
                    
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        this._removePendingPromise(callPromise);
                        const dataReadyToSave = JSON.parse(xhttp.responseText);
                        resolve(dataReadyToSave);
                    }
                    else
                    {
                    	reject('ERROR on the response!!! ',error);
                    }
                };
                xhttp.open(methodType, url, true);
                xhttp.addEventListener('error',(error) => {
                    this._removePendingPromise(callPromise);
                    console.log("ERROR on the response!!! ",error);
                    reject('ERROR on the response!!! ',error);
                });
                xhttp.send(JSON.stringify(requestBodyData));
            });
            this._addPendingPromise(callPromise);
            return callPromise;
        },
      
        //Get all currencies from API and returns a promise
        getProducts: function() {
            
            return this.callMethod(
            'GET',
            'https://django-caenavgu.c9users.io/api/products',
            );
        
        },
        
        userValidate: function(formData) {
            return this.callMethod(
            'GET',
            'https://class-project-backend-jonnywrites.c9users.io/api/user/',
            formData
            );
        },
        
        registerConfirm: function(requestBody) {
            return this.callMethod(
            'PUT',
            'https://class-project-backend-jonnywrites.c9users.io/api/user/',
            requestBody
            );
        },
        
        editProfileConfirm: function(requestBody) {
            return this.callMethod(
            'POST',
            'https://class-project-backend-jonnywrites.c9users.io/api/user/',
            requestBody
            );
        },
        
        passwordResetConfirm: function(requestBody) {
            return this.callMethod(
            'POST',
            'https://class-project-backend-jonnywrites.c9users.io/api/user/'+ requestBody.username + "/cp",
            requestBody
            );
        },
        
        getWatchlist: function(username) {
            return this.callMethod(
            'GET',
            'https://class-project-backend-jonnywrites.c9users.io/api/user/'+username+'/watchlist'
            );
        },
        
        addToWatchlist: function(symbol, username) {
            return this.callMethod(
            'PUT',
            'https://class-project-backend-jonnywrites.c9users.io/api/user/'+username+'/watchlist/'+symbol
            );
        },
        
        removeFromWatchlist: function(symbol, username) {
            return this.callMethod(
            'DELETE',
            'https://class-project-backend-jonnywrites.c9users.io/api/user/'+username+'/watchlist/'+symbol
            );
        },
        
        getSubreddit: function(query) {
            return this.callMethod(
            'GET',
            'https://www.reddit.com/search.json?q='+query
            );
        }
};

export default DevShuiAPIWapper;