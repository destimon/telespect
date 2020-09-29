import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <div className="navbar-item">
          <Link className="active" to="/">
            Home
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="active" to="/asf">
            Statistics
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="active" to="/2">
            Data
          </Link>
        </div>
        <div className="navbar-item">
          <Link className="active" to="/3">
            Management
          </Link>
        </div>
      </div>
    </div>
  )
}
