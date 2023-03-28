import React from 'react';
import {Outlet} from 'react-router-dom'
import Nav from './Nav';

function SharedResource() {
  return (
    <>
        <Nav/>
        <Outlet/>
    </>
  )
}

export default SharedResource