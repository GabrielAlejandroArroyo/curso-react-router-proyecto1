import React from "react";
import { useAuth } from './auth';

function LogoutPage() {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();
        auth.logout();
        //console.log('Logout');
    };

    return (
        // Los fragment se especifican con <> </>
        <>
            <h1>Logout</h1>

            {/* Creo formulario de login  */}
            <form onSubmit={logout}>
                <label> Desea salir ?</label>

                <button type="submit">Salir</button>

            </form>
        </>
    );

    return (
        <h1>LogoutPage</h1>
    );
}

export { LogoutPage };