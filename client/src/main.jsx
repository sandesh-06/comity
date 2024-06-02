import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { AuthLayout, ComityPage, Events, ExploreComity, HomePage, MyComity, OpeningPage } from './pages/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            <HomePage />
          </AuthLayout>
        )
      },
      {
        path: "/explore-comity",
        element: <AuthLayout>
          <ExploreComity />
        </AuthLayout>
      },
      {
        path: "/my-comitys",
        element: <AuthLayout>
          {/* <MyComity /> */}
          <ComityPage />
        </AuthLayout>
      },
      {
        path: "/comity-events",
        element: <AuthLayout>
          <Events />
        </AuthLayout>
      },
    ]
  },
  {
    path: "/welcome",
    element: (
        <AuthLayout authentication={false}>
          <OpeningPage />
        </AuthLayout>
    )
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
