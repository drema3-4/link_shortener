import Login from "./components/Login";
import { CreateLinkPage } from "./pages/CreateLink";
import { LinksPage } from "./pages/Links";

import { RegisterPage } from "./pages/RegisterPage";
import { RedirectPage } from "./pages/Redirect";

const routes  = [
    {path: '/signUp', element: RegisterPage},
    {path: '/login', element: Login},
    {path: '/', element: Login},
    {path: '/createLink', element: CreateLinkPage, auth: true},
    {path: '/links', element: LinksPage, auth: true},
    {path: '/:name', element: RedirectPage}
];



export default routes;