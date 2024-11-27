import { ErrorMessageComponent } from "../components/ErrorMessage";
import { LinkComponent } from "../components/Link";
import { LoaderComponent } from "../components/Loader";
import { useLinks } from "../hooks/links";
import { Table, Container, Row, Col } from "react-bootstrap";
import { NavigateComponent } from "../components/Navigate";

export function LinksPage() {
    const {links, loading, error} = useLinks()

    return (
        <>
            <NavigateComponent />
            <Container>
                <Row className='justify-content-center' style={{marginTop: '1em'}}>
                    <Col xs={10} className='justify-content-center'>
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
                                { links.map(link => <LinkComponent links={links} link={link} key={link.name} />) }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}