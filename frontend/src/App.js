import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import { action as LoginAction } from './pages/LoginPage/action';
import SignUpPage from './pages/SignUp';
import { action as SignUpAction } from './pages/SignUp/action';
import HomePage from './pages/HomePage';
import { loader as HomePageLoader } from './pages/HomePage/loader';
import ProductDetails from './pages/ProductDetails';
import { loader as ProductDetailsLoader } from './pages/ProductDetails/loader';
import CheckOutPage from './pages/CheckOutPage';
import LastStepCheckOutPage from './pages/LastStepCheckOutPage';
import { loader as TokenLoader } from './util/auth';
import { checkAuthLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: TokenLoader,
    children: [
      { index: true, element: <HomePage />, loader: HomePageLoader },
      {
        path: `${ROUTES.LOGIN}`,
        element: <LoginPage />,
      },
      {
        path: `${ROUTES.SIGNUP}`,
        element: <SignUpPage />,
        action: SignUpAction,
      },
      {
        path: 'product/:productID',
        element: <ProductDetails />,
        loader: ProductDetailsLoader,
      },
      { path: `${ROUTES.CHECKOUT}`, element: <CheckOutPage /> },
      {
        path: `${ROUTES.LASTSTEPCHECKOUT}`,
        element: <LastStepCheckOutPage />,
        loader: checkAuthLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
