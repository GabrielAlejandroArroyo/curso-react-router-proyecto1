import { HashRouter, Route, Routes } from 'react-router-dom';

import { Menu } from './Menu';

import { AuthProvider } from './auth'

import { HomePage } from './HomePage';
import { BlogPost } from './BlogPost';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';




// La ruta empieza en /#/ --- Home
// La ruta empieza en /#/blog --- Blog
// La ruta empieza en /#/profile --- Profile

function App() {
  return (
    <>
      {/* Provider de tipo HashRouter */}
      <HashRouter>
        <AuthProvider>
          <Menu />

          {/* Parte dinamica con Routes */}
          <Routes>
            <Route path='/' element={<HomePage />} />


            {/* Nested Route */}
            <Route path='/blog' element={<BlogPage />} >
              {/* <Route path='/blog/:slug' element={<BlogPost />} /> */}
              {/* Como es nested */}
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />

            {/* Debe ir al final para que muestre todas las rutas que no encuentra */}
            <Route path='*' element={<p>Not found</p>} />

          </Routes>

          <footer></footer>
        </AuthProvider>
      </HashRouter>
    </>

  );
}

export default App;
