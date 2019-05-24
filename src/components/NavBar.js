import React from "react";
import { NavLink, Link } from "react-router-dom";
import SideNav from "./SideNav";
import Backdrop from "./Backdrop";

class NavBar extends React.Component {
  state = { sideMenu: false };

  sideMenuClickHandler = () => {
    this.setState(prevState => {
      return { sideMenu: !prevState.sideMenu };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideMenu: false });
  };

  render() {
    let backdrop;
    if (this.state.sideMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="navigation  ">
        <div className="nav-logo ">
          <Link to="/" className="nav-logo-item">
            <p>
              Dalibor Petrić <br />
            </p>
          </Link>
        </div>

        <div className="main-menu">
          <NavLink to="/" className="navbar-item mobile ">
            Početna{" "}
          </NavLink>
          <NavLink to="/about" className="navbar-item mobile ">
            O Meni
          </NavLink>
          <NavLink to="/gallery" className="navbar-item mobile ">
            Galerija
          </NavLink>
          <NavLink to="/seminar" className="navbar-item mobile ">
            Seminarski{" "}
          </NavLink>
          <NavLink to="/media" className="navbar-item mobile ">
            Media{" "}
          </NavLink>
          <NavLink to="/contact" className="navbar-item mobile ">
            Kontakt
          </NavLink>
        </div>

        <div className="social-media ">
          <i
            onClick={this.sideMenuClickHandler}
            className="social-media-item desktop fa fa-bars"
          />

          <a href="https://github.com/korbendalas" target="_blank">
            <i className="fa fa-github  mobile social-media-item" />
          </a>
          <a href="https://www.facebook.com/Paliborbre" target="_blank">
            {" "}
            <i className="fa fa-facebook mobile social-media-item" />{" "}
          </a>
          <a href="https://www.instagram.com/go.u.3.pm/" target="_blank">
            {" "}
            <i className="fa fa-instagram mobile social-media-item" />
          </a>
        </div>
        {backdrop}
        <SideNav
          show={this.state.sideMenu}
          closeMenuHandler={this.sideMenuClickHandler}
        />
      </div>
    );
  }
}
export default NavBar;
