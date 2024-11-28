import axios, { AxiosError } from "axios"
import { ILink } from "../models"
import { useState } from "react"
import { ApiEndpoints } from "../util/endpoints"

interface RedirectProps {
    name: any
}

export function useRedirect(props: RedirectProps) {
    const [originLink, setOriginLink] = useState('')
    const getOriginLink = async (name: any) => {
        try {
            console.log(props.name)
            const body = name as string
            const response = await axios.get<ILink>(ApiEndpoints.getLink, {params: {name : body}})

            if (response.status === 200) {
                setOriginLink(response.data.url)
            }
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log(error)
        }
    }

    getOriginLink(props.name)

    return { originLink }
}