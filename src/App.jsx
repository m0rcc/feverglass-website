import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Discography from './pages/discography/Discography'
import Schedules from './pages/schedules/Schedules'

import BleedForIt from './pages/albums/bleedforit/BleedForIt'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/discography' element={<Discography />} />
        <Route path='/schedules' element={<Schedules />} />

        { /* DISCOGRAPHY */ }
        <Route path='/bleedforit' element={<BleedForIt />} />
      </Routes>
    </HashRouter>
  )
}
export default App