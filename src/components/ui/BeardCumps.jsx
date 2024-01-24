import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

function BeardCumps() {
  return (
    <>
     <Breadcrumbs  >
     <Link to={"/"}>
        Home
     </Link>

     </Breadcrumbs> 
    </>
  )
}

export default BeardCumps
