import * as types from '../constants'

const DEFAULT_STATE = {
    listItem : [],
    isFetching : false,
    dataFetched : false,
    error : false,
    errorMessage : null,
    totalPage : 1 ,
    activePage : 1,
    textSearch:null

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = DEFAULT_STATE , action) => {
    switch (action.type) {
        case types.GET_ITEMS_REQUEST:
        case types.ADD_ITEMS_REQUEST:
        case types.DELETE_ITEMS_REQUEST:
        case types.UPDATE_ITEMS_REQUEST:
        case types.SEARCH_ITEMS_REQUEST:
        case types.PAGE_ITEMS_REQUEST:
            return {
                ...state ,
                isFetching : true,
            }
        case types.GET_ITEMS_SUCCESS:
            return {
                ...state ,
                isFetching : false,
                dataFetched : true,
                error : false,
                errorMessage : null,
                listItem : action.payload,



            }
        case types.SEARCH_ITEMS_SUCCESS:
            return {
                ...state ,
                isFetching : false,
                dataFetched : true,
                error : false,
                errorMessage : null,
                listItem : action.payload.listData,
                totalPage : action.payload.totalPage,
                activePage : action.payload.activePage,
                textSearch : action.payload.textSearch


            }
        case types.PAGE_ITEMS_SUCCESS:
            return {
                ...state ,
                isFetching : false,
                dataFetched : true,
                error : false,
                errorMessage : null,
                listItem : action.payload.listData,
                totalPage : action.payload.totalPage,
                activePage : action.payload.activePage

            }
        case types.ADD_ITEMS_SUCCESS:
        case types.DELETE_ITEMS_SUCCESS:
        case types.UPDATE_ITEMS_SUCCESS:
            return {
                ...state ,
                isFetching : false,
             

            }
        case types.GET_ITEMS_FAILURE:
        case types.ADD_ITEMS_FAILURE:
        case types.DELETE_ITEMS_FAILURE:
        case types.UPDATE_ITEMS_FAILURE:
        case types.SEARCH_ITEMS_FAILURE:
        case types.PAGE_ITEMS_FAILURE:
            return {
                ...state ,
                isFetching : false,
                error : true,
                errorMessage : action.payload.errorMessage,
                dataFetched : false ,

            }
    
        default:
            return state
    }
}