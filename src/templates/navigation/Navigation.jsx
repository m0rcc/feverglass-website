import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <nav>
        <ul id="routers"> 
            <li> <a href="#/discography"> Songs </a> </li>
            <li> <a href="#/schedules"> Schedules </a> </li>
        </ul>
        <a href='#/home' id="title"> <b> FEVERGLASS </b> </a>
        <ul id="socials"> 
            <li> <a className="fa-brands fa-youtube" href="https://youtube.com"></a> </li>
            <li> <a className="fa-brands fa-square-instagram" href="https://instagram.com"></a> </li>
        </ul>
    </nav>
  )
}
export default Navigation