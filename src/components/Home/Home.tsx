import React, { useState } from 'react'

interface Props {}

const menuMock = [
  {
    title: 'Data tools',
    description: 'Lorem ipsum',
    url: '/data',
  },
  {
    title: 'Manage methods',
    description: 'Lorem ipsum',
    url: '/methods',
  },
  {
    title: 'Terminal',
    description: 'Lorem ipsum',
    url: '/terminal',
  },
  {
    title: 'Exit',
    description: 'Lorem ipsum',
    url: '/exit',
  },
]

const Home = (props: Props) => {
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="menu-bar">
          <div className="menu-content">
            <div className="user-short-info">
              <div className="main-info-bar">
                <img className="user-avatar" src="default_avatar.png" alt="" />
              </div>
              <div className="main-user-info">@username</div>
              <div className="sub-user-info">Dmitry Cherendieiev</div>
            </div>
            {menuMock.map((block, index) => (
              <div className="menu-content-block" key={index} onClick={() => null}>
                <div className="block-title">{block.title}</div>
                <div className="block-desc">{block.description}</div>
              </div>
            ))}
          </div>
          <div className="terminal-container">Terminal</div>
        </div>
      </div>
    </div>
  )
}

export default Home
