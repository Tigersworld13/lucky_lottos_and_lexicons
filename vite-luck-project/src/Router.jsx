import { createBrowserRouter } from "react-router-dom";
import { WelcomePage } from "./components";
import { Login } from "./components";
import { RegisterTwo } from "./components";
import { Navbar } from "./components";
import App from "./App";

export const router = createBrowserRouter({
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <WelcomePage />,
            },
            {
                path: "register",
                element: <RegisterTwo />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "luck/horoscope",
                element: <LuckyHoroscope />,
            },
            {
                path: "learnmore",
                element: <LearnMore />,
            }

        ],


    }
})