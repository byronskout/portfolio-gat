import React from 'react';
import { Link } from 'gatsby';
import Sidebar from 'react-sidebar';
import NavLinks from './navlinks';
import Logo from "./logo";
import "../styles/navbar.less";

function SidebarContents() {
  return (
    <div className="sidebar-contents">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="links text-secondary">
        <NavLinks />
      </div>
      <div className="social-links">
      </div>
    </div>
  );
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarPlaceholderHeight: 100,
      sidebarOpen: false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  menuOpen(event) {
    event.preventDefault();
    this.onSetSidebarOpen(true);
  }

  changeNavbarHeight() {
    window.addEventListener('scroll', function () {
      if (this.scrollY > 0) {
        document.querySelector('nav').classList.add('scrolled');
      } else {
        document.querySelector('nav').classList.remove('scrolled');
      }
    });
  }

  componentDidMount() {
    this.changeNavbarPlaceholderHeight();

    let logo = this.nav.querySelector(".logo"),
      _this = this;

    logo.addEventListener("load", function () {
      _this.changeNavbarPlaceholderHeight();
    });

    this.changeNavbarHeight();
  }


  changeNavbarPlaceholderHeight() {
    let navBar = document.querySelector('nav');
    let navbarPlaceholderHeight = navBar.offsetHeight;
    this.setState({
      navbarPlaceholderHeight: navbarPlaceholderHeight
    });
  }

  render() {
    const placeholder = this.props.placeholder;
    return (
      <React.Fragment>
        <Sidebar
          sidebar={<SidebarContents />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          sidebarClassName="sidebar-content"
          styles={{
            sidebar: {
              zIndex: 101,
              position: 'fixed'
            },
            overlay: {
              zIndex: 100
            },
            dragHandle: {
              position: 'fixed',
              zIndex: '99999'
            }
          }}
        >
          <span />
        </Sidebar>
        <nav className="text-secondary" ref={(c) => (this.nav = c)}>
          <a href="#mobilenav" id="menu-open" onClick={this.menuOpen}>
            <span className="icon" />
          </a>
          <Link to="/">
            <Logo />
          </Link>
        </nav>
        {placeholder && (
          <div
            className="navbar-placeholder"
            style={{
              height: this.state.navbarPlaceholderHeight + 'px'
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Navbar;
