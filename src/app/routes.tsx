import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import Start from './pages/Start';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Start },
      {
        path: '/',
        Component: RootLayout,
        children: [
          { path: 'home', Component: Home },
          { path: 'about', Component: About },
          { path: 'skills', Component: Skills },
          { path: 'projects', Component: Projects },
          { path: 'contact', Component: Contact },
        ],
      },
    ],
  },
]);
