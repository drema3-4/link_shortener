import { Button, Form, Table } from "react-bootstrap";
import { ILink } from "../models";
import axios, { AxiosError } from "axios";

interface LinkProps {
    link: ILink
}

export function LinkComponent(props: LinkProps) {

    const buttonClickHandler = (name: string) => async (event: any) => {
        try {
            const response = await axios.get<ILink>('http://localhost:7106/api/Link/GetLink')

            if (response.status === 200 && response.data) {
                await axios.delete('http://localhost:7106/api/Link/DeleteLink', response.data)
            }

        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error.message)
        }
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