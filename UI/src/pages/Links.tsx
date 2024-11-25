import { ErrorMessageComponent } from "../components/ErrorMessage";
import { LinkComponent } from "../components/Link";
import { LoaderComponent } from "../components/Loader";
import { useLinks } from "../hooks/links";

export function LinksPage() {
    const {links, loading, error} = useLinks()

    return (
        <>
            { loading && <LoaderComponent /> }
            { error && <ErrorMessageComponent error={error} /> }
            { links.map(link => <LinkComponent link={link} key={link.name} />) }
        </>
    )
}