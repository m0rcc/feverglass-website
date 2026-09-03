import React from 'react'
import './schedules.css'

import Navigation from '../../templates/navigation/Navigation'

const Schedules = () => {
  return (
    <>
      <Navigation />
      <section className='schedules-title'>
        <h1> SCHEDULES </h1>
      </section>

      <section className='schedules-content'>
        <div id='schedule-template'>
          <div id='schedule-date'>
            <h2> SEP </h2>
            <a> 09/26 </a>
          </div>

          <div id='schedule-info'>
            <h3> UP Diliman — Open Mic </h3>
            <a id='schedule-info-date'> September 7, 2026 </a>
            <a id='schedule-info-venue'> Vinzons Hall, UP Diliman </a>
          </div>
        </div>

        <div id='schedule-template'>
          <div id='schedule-date'>
            <h2> DEC </h2>
            <a> 02/26 </a>
          </div>

          <div id='schedule-info'>
            <h3> Feverglass Debut Party </h3>
            <a id='schedule-info-date'> December 1, 2026 </a>
            <a id='schedule-info-venue'> Manila, Philippines </a>
          </div>
        </div>

        <div id='schedule-template'>
          <div id='schedule-date'>
            <h2> MAR </h2>
            <a> 03/27 </a>
          </div>

          <div id='schedule-info'>
            <h3> Marcus' Birthday Party </h3>
            <a id='schedule-info-date'> March 27, 2027 </a>
            <a id='schedule-info-venue'> Manila, Philippines </a>
          </div>
        </div>

        <div id='schedule-template'>
          <div id='schedule-date'>
            <h2> JUN </h2>
            <a> 06/27 </a>
          </div>

          <div id='schedule-info'>
            <h3> Dean's Birthday Party </h3>
            <a id='schedule-info-date'> June 26, 2027 </a>
            <a id='schedule-info-venue'> Manila, Philippines </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Schedules