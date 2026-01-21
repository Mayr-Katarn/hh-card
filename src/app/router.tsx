import { createBrowserRouter } from 'react-router-dom'
import { ContactsPage } from '../pages/ContactsPage'
import { CvPage } from '../pages/CvPage'
import { HomePage } from '../pages/HomePage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { AppLayout } from './AppLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'cv', element: <CvPage /> },
      { path: 'contacts', element: <ContactsPage /> },
    ],
  },
])
