import { ReactNode } from "react";
import Login from "./components/Login";
import { CreateLinkPage } from "./pages/CreateLink";
import { LinksPage } from "./pages/Links";

import { RegisterPage } from "./pages/RegisterPage";

const routes  = [
    {path: '/signUp', element: RegisterPage},
    {path: '/login', element: Login},
    // {path: '/users', component: IndexUsers, isAdmin: true},
    {path: '/createLink', element: CreateLinkPage, auth: true},
    {path: '/links', element: LinksPage, auth:true}
];



export default routes;