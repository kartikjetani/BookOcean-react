import store from './index';

export const update_query = (query) =>{
store.dispatch({type:"UPDATE_NAME",payload:query})
}


export const update_bookdata = (obj) =>{
    store.dispatch({type:"UPDATE_BOOKDATA",payload:obj})
}