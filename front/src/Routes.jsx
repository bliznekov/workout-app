import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/pages/404";
import { routes } from "./dataRoutes";
import { useAuth } from "./hooks/useAuth";

const App = () => {
    const { isAuth } = useAuth;

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => {
                    {
                        {
                            /* {
                            debugger;
                            if (route.auth && !isAuth) {
                                return false;
                            }
                        } */
                        }
                    }

                    return (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            element={<route.component />}
                            key={`route ${route.path}`}
                        />
                    );
                })}
                <Route path={"*"} element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
