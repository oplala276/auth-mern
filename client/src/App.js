import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Pagenotfound from './components/Pagenotfound';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Username>Root Route</Username>

    },
    {
        path: '/register',
        element: <Register>Register Route</Register>
    },
    {
        path: '/password',
        element: <Password>Password Route</Password>
    },
    {
        path: '/profile',
        element: <Profile>Profile Route</Profile>
    },
    {
        path: '/recovery',
        element: <Recovery>Recovery Route</Recovery>
    },
    {
        path: '/reset',
        element: <Reset>Reset Route</Reset>
    },
    {
        path: '*',
        element: <Pagenotfound>Pagenotfound Route</Pagenotfound>
    },
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}>

            </RouterProvider>
        </main>
    )
}
