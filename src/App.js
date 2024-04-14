import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About"
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocery";

// Chunking,code splitting,lazy loading,ondemand loading
import { lazy } from "react";
import { Suspense } from "react";
import Shimmer from "./components/Shimmer";
const Grocery = lazy(()=> import ("./components/Grocery"));






const AppLayout =() =>{
    return(
        
        <div>
            {/* Header */}
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resID",
                element:<RestaurantMenu/>
            }
        ],
        errorElement: <Error/>,
    },
    

]);
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);