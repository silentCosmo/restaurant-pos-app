import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PageIsLoading from './components/PageIsLoading';
import Header from './components/Header';
import Menu from './components/waiterside/Menu';
import Crud from './pages/Crud';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  const Layout = ()=>{
    return (
      <>
      <Header/>
      <Outlet/>
      </>
    )
  }
  const router = createBrowserRouter ([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/table/:tableNumber',
          element:<Menu/>
        },
        {
          path:'/crud',
          element:<Crud/>
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    
  ])
  return (
    <Provider store={store}>
      <RouterProvider 
      router={router}
      fallbackElement={<PageIsLoading/>}
      />
    </Provider>
  );
}

export default App;
