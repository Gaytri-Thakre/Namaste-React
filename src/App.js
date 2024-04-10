import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About"
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
  





const AppLayout =() =>{
    return(
        
        <div className="app">
            {/* Header */}
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>
    },

]);
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);