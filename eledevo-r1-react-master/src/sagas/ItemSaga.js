import callAPI from '../fetchAPIs/ItemAPI'
import * as actions from '../actions/ItemPageAction'
import {put , takeEvery } from 'redux-saga/effects'
import { ADD_ITEMS_REQUEST, DELETE_ITEMS_REQUEST, GET_ITEMS_REQUEST, PAGE_ITEMS_REQUEST, SEARCH_ITEMS_REQUEST, UPDATE_ITEMS_REQUEST } from '../constants'
import {LIMIT} from '../constants'

function* handleGet() {
    try {
        const res = yield callAPI('GET' , '')
        yield put(actions.getItemSuccess(res.listData))
    } catch (error) {
        yield put(actions.getItemFailure(error))
    }
}
function* handleAdd(action) {
    try {
        yield callAPI('POST' , '' , action.payload)
        yield put(actions.addItemSuccess())
        yield put(actions.pageItemRequest(1))
    } catch (error) {
        yield put(actions.addItemFailure(error))
    }
}
function* handleDelete(action) {
    try {
        yield callAPI('DELETE' ,  `/${action.payload.id}` ,'')
        yield put(actions.deleteItemSuccess())
        yield put(actions.pageItemRequest(1))
    } catch (error) {
        yield put(actions.deleteItemFailure(error))
    }
}
function* handleUpdate(action) {
    try {
        yield callAPI('PUT' , `/${action.payload.id}` , action.payload)
        yield put(actions.updateItemSuccess())
        yield put(actions.pageItemRequest(1))
    } catch (error) {
        yield put(actions.deleteItemFailure(error))
    }
}
function* handleSearch(action) {
    try {
       
        const res = yield callAPI('GET' , `/search?activePage=${action.payload.activePage}&limit=${LIMIT}&textSearch=${action.payload.textSearch}` , '')
        yield put(actions.searchItemSuccess({
            totalPage : res.totalPage,
            listData : res.listData,
            activePage : action.payload.activePage,
            textSearch : action.payload.textSearch
        }))
    } catch (error) {
        yield put(actions.searchItemFailure(error))
    }
}

function* handlePage(action) {
    try {
        const res = yield callAPI('GET' , `/paginate?activePage=${action.payload}&limit=${LIMIT}` ,'')
        yield put(actions.pageItemSuccess({
            totalPage: res.totalPage,
            listData: res.listData,
            activePage: action.payload
        }))
    } catch (error) {
        yield put(actions.pageItemFailure(error))
    }
}

const ItemSaga = [
    takeEvery(GET_ITEMS_REQUEST , handleGet),
    takeEvery(ADD_ITEMS_REQUEST , handleAdd),
    takeEvery(DELETE_ITEMS_REQUEST , handleDelete),
    takeEvery(UPDATE_ITEMS_REQUEST , handleUpdate),
    takeEvery(SEARCH_ITEMS_REQUEST , handleSearch),
    takeEvery(PAGE_ITEMS_REQUEST , handlePage),
]

export default ItemSaga