import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
        <h1>lazy layout</h1>
        {/* rutas hijas */}
        <ul>
            <NavLink to="lazy1"> lazy1</NavLink>
            <NavLink to="lazy2"> lazy2</NavLink>
            <NavLink to="lazy3"> lazy3</NavLink>
        </ul>
        <Routes>
            <Route path='lazy1' element={<LazyPage1/>}/>
            <Route path='lazy2' element={<LazyPage2/>}/>
            <Route path='lazy3' element={<LazyPage3/>}/>
            <Route path='/*' element={<Navigate replace to='lazy1'/>}/>
        </Routes>
    </div>
  )
}

export default LazyLayout