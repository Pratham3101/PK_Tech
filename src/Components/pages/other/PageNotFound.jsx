import React from 'react'
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
   <>
      <center>
        <h1 className='text-center text-warning my-4 fw-bold'> PageNotFound - <span className='text-danger'>404</span></h1>

        <NavLink to='/'><h2>Go To Home</h2></NavLink>
      </center>
   </>
  )
}

export default PageNotFound;
