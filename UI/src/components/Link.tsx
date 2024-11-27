import { Button, Form, Table } from "react-bootstrap";
import { ILink } from "../models";
import axios, { AxiosError } from "axios";
import { ApiEndpoints } from "../util/endpoints";
import { Links } from "react-router-dom";

interface LinkProps {
    links: ILink[]
    link: ILink
}

export function LinkComponent(props: LinkProps) {

    const buttonClickHandler = (id: number) => async (event: any) => {
        try {
            await axios.delete(`${ApiEndpoints.deleteLink}`, {data: {id}})
            props.links.splice(props.links.indexOf(props.link), 1)
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }
    }

    return (
        <tr>
            <td>{props.link.name}</td>
            <td>{props.link.url}</td>
            <td class="text-center">
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