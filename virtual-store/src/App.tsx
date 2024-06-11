import { Home } from "./views/Home"
import { Details } from "./views/Details"
import { Cart } from "./views/Cart"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { NotFound } from "./views/NotFound"
import OnSale from "./views/OnSale"

export function App() {
  const browserRouter = createBrowserRouter([
    { 
      path: "/", 
      element: <Home />
    },
    { 
      path: "/details/:id", 
      element: <Details />
    },
    { 
      path: "/cart", 
      element: <Cart />
    },
    { 
      path: "/*",
      element: <NotFound />
    },
    {
      path: "/onsale",
      element: <OnSale/>
    }
    ]);
  return (
    <>
    <RouterProvider router={browserRouter}/>      
    </>
  )
}