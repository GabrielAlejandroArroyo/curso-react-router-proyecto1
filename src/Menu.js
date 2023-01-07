import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <h2>Con Link</h2>
            <ul>
                <li>
                    {/* <a></a> hace la peticion al servidor y descarga el html */}
                    {/* <a href="/">Home</a> */}
                    {/* <Link></Link>  hace que no se recarge contra el server evita la recarga*/}
                    {/* <Link></Link> con mayuscula por que es un componente de react  esto hace que evite el /#/...*/}
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    {/* <a></a> hace la peticion al servidor y descarga el html */}
                    {/* <a href="/#/blog">Blog</a> */}
                    {/* <Link to='/ruta'></Link> con mayuscula por que es un componente de react  esto hace que evite el /#/...*/}
                    <Link to="/blog"> Blog</Link>
                </li>
                <li>
                    {/* <a></a> hace la peticion al servidor y descarga el html */}
                    {/* <a href="/#/profile">Profile</a> */}
                    {/* <Link to='/ruta'></Link> con mayuscula por que es un componente de react  esto hace que evite el /#/...*/}
                    <Link to="/profile"> Profile</Link>
                </li>
            </ul>
            <h2>Con NavLink -- Permite asignarle style y funciones especificas</h2>
            <ul>
                <li>
                    {/* <a></a> hace la peticion al servidor y descarga el html */}
                    {/* <a href="/">Home</a> */}
                    {/* <Link></Link>  hace que no se recarge contra el server evita la recarga*/}
                    {/* <Link></Link> con mayuscula por que es un componente de react  esto hace que evite el /#/...*/}
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                        to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    {/* <a></a> hace la peticion al servidor y descarga el html */}
                    {/* <a href="/#/blog">Blog</a> */}
                    {/* <Link to='/ruta'></Link> con mayuscula por que es un componente de react  esto hace que evite el /#/...*/}
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                        to="/blog"> Blog</NavLink>
                </li>
                <li>
                    {/* <a></a> hace la peticion al servidor y descarga el html */}
                    {/* <a href="/#/profile">Profile</a> */}
                    {/* <Link to='/ruta'></Link> con mayuscula por que es un componente de react  esto hace que evite el /#/...*/}
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                        })}
                        to="/profile"> Profile</NavLink>
                </li>
            </ul>

        </nav>
    );
}

const routes = [];

routes.push({
    to: '/',
    text: 'Home',
});

routes.push({
    to: '/blog',
    text: 'Blog',
});

routes.push({
    to: '/profile',
    text: 'Profile',
});


export { Menu };