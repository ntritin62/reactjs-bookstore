import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: `${ROUTES.LOGIN}`, element: <LoginPage /> },
      { path: `${ROUTES.SIGNUP}`, element: <SignUpPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
