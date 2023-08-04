import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
