import React, { Component } from "react";
import "../CommonStyle/style.css";
import {LIMIT} from '../constants'
class Items extends Component {
  state = {
    id: "",
    name: "",
    code: "",
    codeSubject: "",
    nameUpdate: "",
    idUpdate: "",
    codeUpdate: "",
    codeSubjectUpdate: "",
    textSearch: "",
  };
  render() {
    let listItem = [];
    if (this.props.items) {
      listItem = this.props.items.map((item, key) => {
        return (
          <tr key={key}>
            <td>{(key+1) + (this.props.activePage -1)*LIMIT}</td>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.codeSubject}</td>
            <th>
              <button
                className="btn btn-warning mr-2"
                onClick={() =>
                  this.setState({
                    nameUpdate: item.name,
                    idUpdate: item._id,
                    codeUpdate: item.code,
                    codeSubjectUpdate: item.codeSubject,
                  })
                }
              >
                EDIT
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.props.deleteItems({ id: item._id })}
              >
                DELETE
              </button>
            </th>
          </tr>
        );
      });
    }

    let pageItems = [];
    let totalPage = this.props.totalPage;
    console.log(totalPage, "totalPageeeeeeeeee");
    let activePage = this.props.activePage;
    for (let i = 1; i <= totalPage; i++) {
      let button = (
        <button
          className="btn btn-primary rounded-0 But2 mr-2"
          key={i}
          style={{ backgroundColor: activePage === i ? "#5B9BD5" : null }}
          onClick={() =>
            this.props.textSearch
              ? this.props.searchItems({
                  textSearch: this.props.textSearch,
                  activePage: i,
                })
              : this.props.pageItems(i)
          }
        >
          {i}
        </button>
      );
      pageItems.push(button);
    }
    return (
      <div className="container">
        <h1 className="text-center">Quản lí sinh viên</h1>
        <div className="form-row box ">
          <div className="form-group col-md-1 "></div>
          <div className="form-group col-md-3 ">
            <input
              value={this.state.code}
              onChange={(e) => this.setState({ code: e.target.value })}
              className="form-control rounded-0 border border-dark"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="form-control rounded-0 border border-dark"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              value={this.state.codeSubject}
              onChange={(e) => this.setState({ codeSubject: e.target.value })}
              className="form-control rounded-0 border border-dark"
            />
          </div>
          <div className="form-group col-md-1  ">
            <button
              onClick={() =>
                this.props.addItems({
                  code: this.state.code,
                  name: this.state.name,
                  codeSubject: this.state.codeSubject,
                })
              }
              className="btn btn-primary But border border-dark "
            >
              ADD
            </button>
          </div>
        </div>

        <div className="form-row box">
          <div className="form-group col-md-1"></div>
          <div className="form-group col-md-3">
            <input
              value={this.state.codeUpdate}
              onChange={(e) => this.setState({ codeUpdate: e.target.value })}
              className="form-control rounded-0 border border-dark"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              value={this.state.nameUpdate}
              onChange={(e) => this.setState({ nameUpdate: e.target.value })}
              className="form-control rounded-0 border border-dark"
            />
          </div>
          <div className="form-group col-md-3">
            <input
              value={this.state.codeSubjectUpdate}
              onChange={(e) =>
                this.setState({ codeSubjectUpdate: e.target.value })
              }
              className="form-control rounded-0 border border-dark"
            />
          </div>
          <div className="form-group col-md-1">
            <button
              onClick={() =>
                this.props.updateItems({
                  name: this.state.nameUpdate,
                  id: this.state.idUpdate,
                  code: this.state.codeUpdate,
                  codeSubject: this.state.codeSubjectUpdate,
                })
              }
              className="btn btn-primary But border border-dark"
            >
              UPDATE
            </button>
          </div>
        </div>

        <div className="form-row box">
          <div className="form-group col-md-3"></div>

          <div className="form-group col-md-5">
            <input
              value={this.state.textSearch}
              onChange={(e) => this.setState({ textSearch: e.target.value })}
              className="form-control rounded-0 border border-dark"
            />
          </div>
          <div className="form-group col-md-4">
            <button
              className="btn btn-primary But border-dark"
              onClick={() =>
                this.props.searchItems({
                  textSearch: this.state.textSearch,
                  activePage: 1,
                })
              }
            >
              SEARCH
            </button>
          </div>
        </div>
        <table className="table table-bordered table-hover ">
          <thead className="table-header text-center mb-2">
            <tr className="mb-3">
              <th>ID</th>
              <th>Mã Sinh viên</th>
              <th>Tên Sinh Viên</th>
              <th>Mã Học Phần</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody id="student" className="text-center">
            {listItem}
          </tbody>
        </table>
        {pageItems}
      </div>
    );
  }
}

export default Items;
