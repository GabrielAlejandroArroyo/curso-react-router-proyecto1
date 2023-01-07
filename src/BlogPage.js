import React from "react";
// utilizo Outlet, por que es neted
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata"

function BlogPage() {
    return (
        <>
            <h1>Blog Pages</h1>
            {/* Previsualiza la seleccion y sigue mostrando la seleccion, cuando cambio de seleccion previsualiza los datos de la seleccion
            El uso de esto seria importante pára seleccionar de una lista o grilla y ver lo seleccionado */}
            <Outlet />

            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slug} post={post} />
                ))}
            </ul>
        </>

    );
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`} > {post.title} </Link>
        </li >
    );
}


export { BlogPage };