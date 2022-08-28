import * as types from '../constants'

function getItemRequest() {
    return (
        {
            type:types.GET_ITEMS_REQUEST
        }
    )
}
function getItemSuccess(payload) {
    return (
        {
            type:types.GET_ITEMS_SUCCESS,
            payload:payload
        }
    )
}
function getItemFailure(payload) {
    return (
        {
            type:types.GET_ITEMS_FAILURE,
            payload:payload
        }
    )
}


function addItemRequest(payload) {
    return (
        {
            type:types.ADD_ITEMS_REQUEST,
            payload:payload
        }
    )
}
function addItemSuccess(payload) {
    return (
        {
            type:types.ADD_ITEMS_SUCCESS,
            payload:payload
        }
    )
}
function addItemFailure(payload) {
    return (
        {
            type:types.ADD_ITEMS_FAILURE,
            payload:payload
        }
    )
}


function deleteItemRequest(payload) {
    return (
        {
            type:types.DELETE_ITEMS_REQUEST,
            payload:payload
        }
    )
}
function deleteItemSuccess(payload) {
    return (
        {
            type:types.DELETE_ITEMS_SUCCESS,
            payload:payload
        }
    )
}
function deleteItemFailure(payload) {
    return (
        {
            type:types.DELETE_ITEMS_FAILURE,
            payload:payload
        }
    )
}
function updateItemRequest(payload) {
    return (
        {
            type:types.UPDATE_ITEMS_REQUEST,
            payload:payload
        }
    )
}
function updateItemSuccess(payload) {
    return (
        {
            type:types.UPDATE_ITEMS_SUCCESS,
            payload:payload
        }
    )
}
function updateItemFailure(payload) {
    return (
        {
            type:types.UPDATE_ITEMS_FAILURE,
            payload:payload
        }
    )
}



function searchItemRequest(payload) {
    return (
        {
            type:types.SEARCH_ITEMS_REQUEST,
            payload:payload
        }
    )
}
function searchItemSuccess(payload) {
    return (
        {
            type:types.SEARCH_ITEMS_SUCCESS,
            payload:payload
        }
    )
}
function searchItemFailure(payload) {
    return (
        {
            type:types.SEARCH_ITEMS_FAILURE,
            payload:payload
        }
    )
}
function pageItemRequest(payload) {
    return (
        {
            type:types.PAGE_ITEMS_REQUEST,
            payload:payload
        }
    )
}
function pageItemSuccess(payload) {
    return (
        {
            type:types.PAGE_ITEMS_SUCCESS,
            payload:payload
        }
    )
}
function pageItemFailure(payload) {
    return (
        {
            type:types.PAGE_ITEMS_FAILURE,
            payload:payload
        }
    )
}

export {
    getItemRequest , getItemSuccess , getItemFailure ,
    addItemRequest , addItemSuccess , addItemFailure ,
    deleteItemRequest , deleteItemSuccess , deleteItemFailure,
    updateItemRequest , updateItemSuccess , updateItemFailure,
    searchItemRequest , searchItemSuccess , searchItemFailure ,
    pageItemRequest , pageItemSuccess , pageItemFailure
}

