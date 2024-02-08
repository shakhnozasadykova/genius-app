import React from 'react';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { MainPage } from './pages/MainPage/MainPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';
import { SongDetails } from './pages/CardPage/CardPage'; 



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/main-page",
      element: <MainPage />
    },
    {
      path: "/song",
      element: <SongDetails />
    },
  ])

  return (
    <ThemeProvider>
      <div className="App">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
