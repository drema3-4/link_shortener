import { Button, Form, Table } from "react-bootstrap";
import { ILink } from "../models";

interface LinkProps {
    link: ILink
}

export function LinkComponent(props: LinkProps) {

    const buttonClickHandler = (name: string) => (event: any) => {
        console.log(name)
    }

    return (
        <tr>
            <td>props.link.name</td>
            <td>props.link.url</td>
            <td>
                <Button
                    variant="danger"
                    onClick={buttonClickHandler(props.link.name)}
                >
                    Delete
                </Button>
            </td>
        </tr>
    )
}