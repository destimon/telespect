import React from 'react'

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <div className="navbar-item">
          <a className="active" href="#home">
            Home
          </a>
        </div>
        <div className="navbar-item">
          <a href="#news">News</a>
        </div>
        <div className="navbar-item">
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-item">
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  )
}
