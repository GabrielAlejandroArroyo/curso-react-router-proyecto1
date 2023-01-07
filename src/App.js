import { HashRouter, Route, Routes } from 'react-router-dom';

import { Menu } from './Menu';

import { HomePage } from './HomePage';
import { BlogPost } from './BlogPost';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';


// La ruta empieza en /#/ --- Home
// La ruta empieza en /#/blog --- Blog
// La ruta empieza en /#/profile --- Profile

function App() {
  return (
    <>
      {/* Provider de tipo HashRouter */}
      <HashRouter>
        <Menu />

        {/* Parte dinamica con Routes */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path='/profile' element={<ProfilePage />} />
          {/* Debe ir al final para que muestre todas las rutas que no encuentra */}
          <Route path='*' element={<p>Not found</p>} />

        </Routes>

        <footer></footer>
      </HashRouter>
    </>

  );
}

export default App;
