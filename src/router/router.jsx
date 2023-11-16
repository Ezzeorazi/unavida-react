import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { Error404} from "../pages/Error404";
import { Home } from "../pages/Home";
import { Nosotros } from "../pages/Nosotros";
import { QueHacemos } from "../pages/QueHacemos";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path: "/nosotros",
                element:<Nosotros/>
            },
            {
                path: "/quehacemos",
                element:<QueHacemos/>
            }
        ]
        




    }

])