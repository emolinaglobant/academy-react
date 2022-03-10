import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Notfound = () => {
    var container = document.getElementById('container_error');
    window.onmousemove = function (e) {
        var x = - e.clientX / 5,
            y = - e.clientY / 5;
        container.style.backgroundPositionX = x + 'px';
        container.style.backgroundPositionY = y + 'px';
    }
    return (
        <>
            <NavBar></NavBar>
            <main id="container_error">
                <section className="content">
                    <h2>404</h2>
                    <h4>Oops! Page Not Found</h4>
                    <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
                    <Link className='navlink' to="/">Back to Home</Link>
                </section>
            </main>
        </>
    )
}
