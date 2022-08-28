import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <h1 className="">HomePage</h1>
          <a href="/items" className="btn btn-primary">
            Click Here !
          </a>
        </div>
      </div>
    );
  }
}
