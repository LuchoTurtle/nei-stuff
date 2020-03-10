/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {Button, Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      displayNavTitle: "none"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
        displayNavTitle: ""
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
        displayNavTitle: "none"
      });
    }
  };

  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };

  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };

  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };

  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  scrollToIntro = () => {
    document
        .getElementById("intro-section")
        .scrollIntoView({ behavior: "smooth" });
  };

  scrollToRewards = () => {
    document
        .getElementById("reward-section")
        .scrollIntoView({ behavior: "smooth" });
  };

  scrollToSpeeches = () => {
    document
        .getElementById("speeches-section")
        .scrollIntoView({ behavior: "smooth" });
  };

  scrollToRegister = () => {
    document
        .getElementById("register-section")
        .scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by Creative Tim"
              tag={Link}
            >
              <span style={{display: this.state.displayNavTitle}}>GIT OVERFLOW</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    GIT OVERFLOW
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  onClick={this.scrollToIntro}
                  style={{cursor: "pointer"}}
                >
                  <span>Sobre o evento</span>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                    data-placement="bottom"
                    onClick={this.scrollToRewards}
                    style={{cursor: "pointer"}}
                >
                  <span>Prémios</span>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                    data-placement="bottom"
                    onClick={this.scrollToSpeeches}
                    style={{cursor: "pointer"}}
                >
                  <span>Palestras</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={this.scrollToRegister}
                >
                  <i className="tim-icons icon-simple-add" /> Registar
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
