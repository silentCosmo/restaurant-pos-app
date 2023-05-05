import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PageIsLoading from './components/PageIsLoading';
import Header from './components/Header';
import Menu from './components/waiterside/Menu';

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
    }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    
  ])
  return (
    <RouterProvider 
    router={router}
    fallbackElement={<PageIsLoading/>}
    />
  );
}

export default App;
