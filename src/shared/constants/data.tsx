import Catalog from "../../pages/Catalog/Catalog";
import Home from "../../pages/Home/Home";

export const PAGES = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/catalog',
        element: <Catalog/>
    }
]