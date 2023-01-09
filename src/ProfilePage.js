import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function ProfilePage() {
    const auth = useAuth();

    return (
        <>
            <h1>Perfil</h1>
            <p>welcome, {auth.user.username}</p>
        </>

    );
}

export { ProfilePage };