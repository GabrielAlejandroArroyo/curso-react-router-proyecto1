import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
    const auth = useAuth();
    return (
        <>
            <h1>Perfil</h1>
            <p>
                welcome, {auth.user.username}
            </p>
        </>

    );
}

export { ProfilePage };