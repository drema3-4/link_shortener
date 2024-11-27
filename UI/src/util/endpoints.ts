const baseURL = 'http://localhost:7106/'
const frontBaseUrl = 'http://localhost:5174/'
export const ApiEndpoints = {
    signUp:  baseURL + 'api/accounts/signUp',
    login: baseURL + 'api/accounts/login',
    frontHost: frontBaseUrl,
    createLink: baseURL + 'api/Link/CreateLink',
    getLink: baseURL + 'api/Link/GetLink',
    deleteLink: baseURL + 'api/Link/DeleteLink',
    getLinks: baseURL + 'api/Link/GetLinks',
}