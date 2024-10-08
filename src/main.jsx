// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './Routes/Routes'
// import { ThemeProvider } from './providers/ThemeProvider'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider>
//       <RouterProvider router={router} />
//     </ThemeProvider>
//   </StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { ThemeProvider } from './providers/ThemeProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className='bg-white dark:bg-gray-900'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
)
