import React from 'react'

interface Props {}

const menuMock = [
  {
    title: 'Lorem',
    description: 'Lorem ipsum',
  },
  {
    title: 'Lorem',
    description: 'Lorem ipsum',
  },
  {
    title: 'Lorem',
    description: 'Lorem ipsum',
  },
  {
    title: 'Lorem',
    description: 'Lorem ipsum',
  },
  {
    title: 'Lorem',
    description: 'Lorem ipsum',
  },
]

const Home = (props: Props) => {
  return (
    <div className="home-container">
      <div className="top-head-content">
        <div className="main-info-bar">
          <img className="user-avatar" src="default_avatar.png" alt="" />
          <div className="user-short-info">
            <div className="main-user-info">@username</div>
            <div className="sub-user-info">Dmitry Cherendieiev</div>
          </div>
        </div>
      </div>
      <div className="menu-bar">
        <div className="menu-header">Tools & Preferences</div>
        <div className="menu-content">div.</div>
      </div>
    </div>
  )
}

export default Home
