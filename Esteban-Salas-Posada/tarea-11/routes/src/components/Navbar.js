import React from 'react'
import './navbar.css' 
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const index = [1,2,3,4,5,6,7,8,9,10]

  return (
      <>
        <ul>
              {
                index.map( (value, key)=>{
                  return <li>
                          <NavLink key={key} className={({isActive})=> isActive ? 'active' : 'link' } to={`/task${value}`}>
                            Task {value}
                          </NavLink>
                        </li>
                } )
              }
            
        </ul>
      </>
    )
}
