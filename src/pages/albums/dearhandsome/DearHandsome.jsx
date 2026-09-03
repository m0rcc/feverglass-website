import React from 'react'
import { Link } from 'react-router-dom'
import '../albums.css'

import discography_cover_sample from '../../../assets/images/main/album-cover-sample-2.jpg'

import Navigation from '../../../templates/navigation/Navigation'
const DearHandsome = () => {
  return (
    <>
      <Navigation />
      
      <section className='songs-cover'>
        <div id='songs-image'>
          <img src={discography_cover_sample} alt="" />
        </div>
        <div id='songs-description'>
          <h1>DEAR HANDSOME</h1>
          <div id='horizontal-divider'></div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          </p>
        </div>
      </section>

      <section className='songs-list'>
        <h2>SONGS</h2>
        <div id='song-info'>
          <div id='song-image' className='hidden-song'>
            <img src={discography_cover_sample} alt="" />
          </div>
          <div id='song-description'>
            <a href='' id='song-title'>???</a>
            <a id='song-length'>X:XX</a>
            <div id='song-links'>
              <a className="fa-brands fa-youtube"></a>
              <a className="fa-brands fa-spotify"></a>
            </div>
          </div>
          <a href="" id='clickable-link'></a>
        </div>
      </section>
      
    </>
  )
}

export default DearHandsome