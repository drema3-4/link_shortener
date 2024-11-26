import { ErrorMessageComponent } from "../components/ErrorMessage";
import { LinkComponent } from "../components/Link";
import { LoaderComponent } from "../components/Loader";
import { useLinks } from "../hooks/links";
import { Table } from "react-bootstrap";
import { NavigateComponent } from "../components/Navigate";

export function LinksPage() {
    const {links, loading, error} = useLinks()

    return (
        <>
            <NavigateComponent />
            { loading && <LoaderComponent /> }
            { error && <ErrorMessageComponent error={error} /> }
            <Table bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { links.map(link => <LinkComponent link={link} key={link.name} />) }
                </tbody>
            </Table>
        </>
    )
}