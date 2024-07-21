import { Route, Routes, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import GuestLayout from "./components/GuestLayout";
import UserLayout from "./components/UserLayout";
import AdminHome from "./views/AdminViews/AdminHome";
import GuestHome from "./views/GuestViews/GuestHome";
import Notfound from "./views/Notfound";
import Login from "./views/GuestViews/Login";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Team from "./views/UserViews/Team";
import Projects from "./views/UserViews/Projects";
import Experiments from "./views/UserViews/Experiments";
import UserHome from "./views/UserViews/UserHome";
import Calender from "./views/UserViews/Calender";
import Contact from "./views/GuestViews/Contact";
import About from "./views/GuestViews/About";
import Register from "./views/GuestViews/Register";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #00a300 30%, #009900 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: 'guesthome',
                element: <GuestHome />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: 'adminhome',
                element: <AdminHome />
            }
        ]
    },
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: 'userhome',
                element: (
                    <>
                    
                        <Pages>
                            <AnimatePresence mode="wait">
                            <UserHome/>
                            </AnimatePresence>
                        </Pages>
                        </>
                )
            },
            {
                path: 'team',
                element: (
                    <>
                    
                        <Pages>
                            <AnimatePresence mode="wait">
                            <Team/>
                            </AnimatePresence>
                        </Pages>
                        </>
                )
            },
            {
                path: 'projects',
                element: (
                    <>
                    
                        <Pages>
                            <AnimatePresence mode="wait">
                            <Projects/>
                            </AnimatePresence>
                        </Pages>
                        </>
                )
            },
            {
                path: 'calender',
                element: (
                    <>
                    
                        <Pages>
                            <AnimatePresence mode="wait">
                            <Calender/>
                            </AnimatePresence>
                        </Pages>
                        </>
                )
            },
            {
                path: 'experiments',
                element: (
                    <>
                    
                        <Pages>
                            <AnimatePresence mode="wait">
                            <Experiments/>
                            </AnimatePresence>
                        </Pages>
                        </>
                )
            }
        ]
    },
    {
        path: '*',
        element: <Notfound />
    }
]);

export default router;
