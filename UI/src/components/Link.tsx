import { Button, Form, Table } from "react-bootstrap";
import { ILink } from "../models";
import axios, { AxiosError } from "axios";

interface LinkProps {
    link: ILink
}

export function LinkComponent(props: LinkProps) {

    const buttonClickHandler = (id: number) => async (event: any) => {
        try {
            await axios.delete('http://localhost:7106/api/Link/DeleteLink', {data: {id}})
            console.log("Ура")
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    return (
        <tr>
            <td>{props.link.name}</td>
            <td>{props.link.url}</td>
            <td>
                <Button
                    variant="danger"
                    onClick={buttonClickHandler(props.link.id)}
                >
                    Delete
                </Button>
            </td>
        </tr>
    )
}