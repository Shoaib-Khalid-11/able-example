// import { Route, RouteObject } from 'react-router-dom';

// interface RouteConfig extends RouteObject {
//   element: React.ReactNode;
//   children?: RouteConfig[]; // Recursive definition for nested children
// }

// export const renderRoutes = (routesToRender: RouteConfig[]): JSX.Element => (
//     {routesToRender.map((routeConfig: any, index: number) => {
//         const { path, element, children }:{path: string, element: JSX.Element, children: RouteConfig[]} = routeConfig;
//         if (path && !element) {
//             return renderRoutes(children);
//         }
//         return (
//             <Route
//                 key={index}
//                 path={path}
//                 element={element}
//             >
//                 {children && renderRoutes(children)}
//             </Route>
//         );
//     })}
// );
