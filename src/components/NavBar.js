import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { a } from "react-router-dom";
export class NavBar extends Component {


  render() {

    function searchvalue()  {

      let a = document.getElementById('input');
      console.log(a);
    }
    return (
      <>
        <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark  ">
          <div className="container-fluid ">
            <a className="navbar-brand" href="/">FreshNews </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-link active">
                  <a className="nav-link" aria-current="page" href="/">Home </a>


                </li>

                <li className="nav-link active">
                  <a className="nav-link" href="/about">About</a>
                </li>


                <li className="nav-link active ">

                  <a className="nav-link" href="/business">business</a>
                </li>
                <li className="nav-link active ">
                  <a className="nav-link" href="/entertainment">entertainment</a>
                </li>
                <li className="nav-link active ">
                  <a className="nav-link" href="/general">general</a>
                </li>
                <li className="nav-link active ">
                  <a className="nav-link" href="/health">health</a>
                </li>
                <li className="nav-link active ">
                  <a className="nav-link" href="/science">science </a>
                </li>
                <li className="nav-link active ">
                  <a className="nav-link" href="/technology">technology</a>

                </li>

              </ul>
              <form className="d-flex">
                <input className="form-control me-2" id="input" type="text" placeholder="Search" />
                <button className="btn btn-outline-success"  onClick={searchvalue()} >Search</button>

              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default NavBar
