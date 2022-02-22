import React from 'react'
import './navbar.css' 
import { NavLink } from 'react-router-dom'
import Task1 from '../pages/01/task1'

export default function Navbar() {
  return (
      <>
        <ul>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task1'>Task 1</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task2'>Task 2</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task3'>Task 3</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task4'>Task 4</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task5'>Task 5</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task6'>Task 6</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task7'>Task 7</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task8'>Task 8</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task9'>Task 9</NavLink> </li>
            <li> <NavLink className={ ({isActive})=> isActive ? 'active' : 'link' } to='/task10' >Task 10</NavLink> </li>
        </ul>
      </>
    )
}
