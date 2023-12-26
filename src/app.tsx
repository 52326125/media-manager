import { StrictMode } from 'react'
import { store } from '@/store'
import { router } from '@/router'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
