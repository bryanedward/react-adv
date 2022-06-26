

import { Suspense } from 'react';
import { NavLink, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { routers } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>cargando...</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routers.map( item => (
                  <li key={item.to}>
                    <NavLink to={item.to} className="">{item.name}</NavLink>
                  </li> )
                )
              }
            </ul>
          </nav>

          <Routes>
            {
              routers.map( item =>
              (
                <Route key={item.path} path={item.path} element={<item.Component />} />
              )
              )
            }
            <Route path='/*' element={<Navigate to="/lazyload" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}