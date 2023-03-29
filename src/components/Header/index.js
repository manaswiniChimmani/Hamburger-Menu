// Write your code here
import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="nav-bar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-btn"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="container1">
            <button
              className="close-btn"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="list1">
              <li className="item">
                <Link className="link" to="/" onClick={() => close()}>
                  <AiFillHome className="icons" />
                  <p className="link-name">Home</p>
                </Link>
              </li>
              <li className="item">
                <Link className="link" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill className="icons" />
                  <p className="link-name">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
