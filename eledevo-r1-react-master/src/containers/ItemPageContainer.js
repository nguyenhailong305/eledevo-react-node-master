import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/Items'
import * as actions from '../actions/ItemPageAction'

class ItemPageContainer extends Component {
    componentDidMount() {
        this.props.pageItems(1)
    }
    render() {
        return (
           <Items {...this.props}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items.listItem,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage,
        textSearch : state.items.textSearch

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getItems: () => {
            dispatch(actions.getItemRequest())
        },
        addItems: (data) => {
            dispatch(actions.addItemRequest(data))
        },
        deleteItems: (data) => {
            dispatch(actions.deleteItemRequest(data))
        },
        updateItems: (dataUpdate) => {
            dispatch(actions.updateItemRequest(dataUpdate))
        },
        searchItems: (data) => {
            dispatch(actions.searchItemRequest(data))
        },
        pageItems: (data) => {
            dispatch(actions.pageItemRequest(data))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)