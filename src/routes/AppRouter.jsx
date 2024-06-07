import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from '../LandingPage/components/Hero'
import { AboutMe } from '../LandingPage/components/AboutMe'
import { Projects } from '../LandingPage/components/Projects'
import { Contact } from '../LandingPage/components/Contact'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='about' element={<AboutMe />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}
