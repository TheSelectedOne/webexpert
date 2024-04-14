import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { UserList } from './features/UserList/UserList.jsx'
import { userListLoader } from './features/UserList/userListLoader.js'
import { UserProfile } from './features/UserProfile/UserProfile.jsx'
import { userProfileLoader } from './features/UserProfile/userProfileLoader.js'
import { UserProfileEdit } from './features/UserProfile/UserProfileEdit.jsx'
import { userEditAction } from './features/UserProfile/userEditAction.js'
import { UserProfileAdd } from './features/UserProfile/userProfileAdd.jsx'
import { userAddAction } from './features/UserProfile/userAddAction.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserList />,
    loader: userListLoader,
  },
  {
    path: '/user/:id',
    element: <UserProfile />,
    loader: userProfileLoader,
  },
  {
    path: '/user/:id/edit',
    element: <UserProfileEdit />,
    loader: userProfileLoader,
    action: async ({ request, params }) => await userEditAction({ request, params })
  },
  {
    path: '/user/add',
    element: <UserProfileAdd />,
    action: async ({ request }) => await userAddAction({ request })
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
