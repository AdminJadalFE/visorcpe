export const URL_BACK = 'http://k8s-default-jadalfet-cf91b6022a-2120898865.us-east-1.elb.amazonaws.com/api/cpe/';

export const FetchGet = async (endpoint) => { 
    const response = await fetch(URL_BACK + endpoint);
    const content = await response.json();    
    return content;
}

export const FetchConf = async (endpoint, method, data) => {

    const config = {
        method: method,
        body: JSON.stringify(data),
        headers: {'Content-type':'application/json'}
    }
    const response = await fetch(URL_BACK + endpoint, config); 
    const content = await response.json();  
    return content; 
}

