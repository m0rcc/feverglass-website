import React from 'react'
import './discography.css'

import discography_cover_sample from '../../assets/images/main/album-cover-sample-2.jpg'

import Navigation from '../../templates/navigation/Navigation'
const Discography = () => {
  return (
    <>
      <Navigation />
      <section className='introduction'>
        <h1> DISCOGRAPHY </h1>
      </section>
      <section className='discography'>
        <div className='discography-container'>
          <div id='discography-cover'>
            <div id='discography-image'> 
              <a href="#/bleedforit">
                 <img src={discography_cover_sample} alt="" />
              </a>
            </div>
            <div id='discography-title'> 
              <h2>BLEEDFORIT</h2>
              <a>It's gonna rain.</a>
            </div>
          </div>
          <div class='song-cover'>
            <img src="" alt="" />
            <h3></h3>
            <a href=""></a>
          </div>
        </div>

        <div className='discography-container' id='hidden-discography'>
          <div id='discography-cover'>
            <div id='discography-image'> 
              <a href="">
                 <img src={discography_cover_sample} alt="" />
              </a>
            </div>
            <div id='discography-title'> 
              <h2>???</h2>
              <a>Are you near, I can feel me breaking.</a>
            </div>
          </div>
          <div class='song-cover'>
            <img src="" alt="" />
            <h3></h3>
            <a href=""></a>
          </div>
        </div>

        <div className='discography-container' id='hidden-discography'>
          <div id='discography-cover'>
            <div id='discography-image'> 
              <a href="">
                 <img src={discography_cover_sample} alt="" />
              </a>
            </div>
            <div id='discography-title'> 
              <h2>???</h2>
              <a>Someday you may be my one.</a>
            </div>
          </div>
        </div>
      </section>
      <br />

    </>
  )
}

export default Discography