import React from 'react';
import { Navigate } from 'react-router-dom';
import App from './App';



const routes = [

  {
  path:'/',
  element:<App/>
  }
]
// const routes = [
//   {
//     path: 'app',
//     element: <DashboardLayout />,
//     children: [
//       { path: 'dashboard', element: <DashboardView /> },
//       { path: 'identify-water-sources/list', element: <IwsList /> },
//       { path: 'certify-har-gharJal-village/list', element: <ChgjvList /> },
//       { path: 'tag-physical-assets/list', element: <TpaList /> },
//       { path: 'state/list', element: <State /> },
//       { path: 'district/list', element: <District /> },
//       { path: 'block/list', element: <BLock /> },
//       { path: 'grampanchayat/list', element: <Grampanchayat /> },
//       { path: 'village/list', element: <Village /> },
//       { path: 'content/list', element: <Content /> },
//       { path: 'usercreate', element: <UserCreate /> },
//       { path: 'user/update/:id', element: <UserCreate /> },
//       { path: 'user/location/:id', element: <UserLocation /> },
//       { path: 'userlist', element: <UserList /> },
//       { path: 'content/create', element: <ContentCreate /> },
//       { path: 'content/update/:id', element: <ContentCreate /> },
//       { path: 'help/list', element: <Help /> },
//       { path: 'help/create', element: <HelpCreate /> },
//       { path: 'help/update/:id', element: <HelpCreate /> },
//       { path: '*', element: <Navigate to="/404" /> },
//       { path: 'village/dashboard', element: <VillageDashboard /> },
//       // { path: 'demo', element: <DemoMap /> },

//     ],
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/public',
//     element: <PublicLayout />,
//     children: [{ path: 'dashboard', element: <Dashboard /> }],
//   },

//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       { path: '404', element: <NotFoundView /> },
//       { path: '/', element: <Navigate to="/app/dashboard" /> },
//       { path: '*', element: <Navigate to="/404" /> },
//     ],
//   },
// ];
export default routes;