
export default{
    
    fetch: 
        function(api, cb){
            
            console.log('fetching: ', api);
            var req = new XMLHttpRequest();
        
            req.onreadystatechange = function() {
                if(req.readyState === 4) { // done
                    if(req.status === 200) { // complete	
                        var res = JSON.parse(req.response);
                        console.log(res);
                        cb(res);
                    }
                }
            };

        req.open('GET', api, true);
        req.send(null);
    }
}