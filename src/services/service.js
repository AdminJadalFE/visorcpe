import {FetchGet, FetchConf} from '../BackConfig';

export const getTipoCPE = async () => {
    let content = await FetchGet(`tipocpe`); 
    if (content.status === false){
        console.log('Ocurrió un error al obtener los datos del servidor')
    }else{
        return content.content;
    } 
}

export const getTipoDOC = async () => {
    let content = await FetchGet(`tipodoc`);  
    if (content.status === false){
        console.log('Ocurrió un error al obtener los datos del servidor')
    }else{
        return content.content;
    }
}

export const getCPE = async (data) => { 
    let content = await FetchConf('searchcpe','POST',data);
    console.log(content)
    return content;
}
