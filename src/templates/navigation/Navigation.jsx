import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <ul id="routers"> 
            <li> <Link to="/discography"> Songs </Link> </li>
            <li> <Link to="/schedules"> Schedules </Link> </li>
        </ul>
        <Link to="/home" id="title"> <b> FEVERGLASS </b> </Link>
        <ul id="socials"> 
            <li> <a className="fa-brands fa-youtube" href="https://youtube.com"></a> </li>
            <li> <a className="fa-brands fa-square-instagram" href="https://instagram.com"></a> </li>
        </ul>
    </nav>
  )
}
export default Navigation