import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from './blogdata'

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();


    const blogpost = blogdata.find(post => post.slug === slug);

    const returnToBlog = () => {
        // Fuerzo una ruta
        navigate('/blog');
        // Fuerzo a la ruta enterior con -1 o ultima ruta anterior
        //navigate(-1);
    };

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>volver al blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    );
}
export { BlogPost };