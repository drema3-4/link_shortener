import axios, { AxiosError } from "axios"
import { ILink } from "../models"
import { useState } from "react"

interface RedirectProps {
    name: any
}

export function useRedirect(props: RedirectProps) {
    const [originLink, setOriginLink] = useState('')

    const getOriginLink = async (name: any) => {
        try {
            const body = name as string
            const response = await axios.get<ILink>('url', {data: {body}})

            if (response.status === 200) {
                setOriginLink(response.data.url)
            }
        } catch (e: unknown) {
            const error = e as AxiosError
        }
    }

    getOriginLink(props.name)

    return { originLink }
}