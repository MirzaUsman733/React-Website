import { Link } from 'react-router-dom'
import './FourZeroFour.css'
import React from 'react'

export default function FourZeroFour() {
  return (
    <div className='fr'>
      <h1 className='fr1'>404 Error</h1>
      <h1>OOPS! Page Not Found</h1>
      <Link to='/' className='btn btn-primary mt-3 w-25'>Return Home</Link>
    </div>
  )
}
