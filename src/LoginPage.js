import React from "react";
import { useAuth } from './auth'

function LoginPage() {
    const auth = useAuth();
    const [username, setUsername] = React.useState('');

    const login = (e) => {
        e.preventDefault();
        auth.login({ username });
        //console.log(username);
    };

    return (
        // Los fragment se especifican con <> </>
        <>
            <h1>Login</h1>

            {/* Creo formulario de login  */}
            <form onSubmit={login}>
                <label> Escribe tu nombre de usuario :</label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>

            </form>
        </>
    );
}

export { LoginPage };