import React from 'react';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { MainPage } from './pages/MainPage/MainPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />
    },
    {
      path: "/main-page",
      element: <MainPage />
    },
    {
      path: "sign-up",
      element: <SignUp />
    }
  ])

  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
