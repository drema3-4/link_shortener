import { useState } from "react"
import { ICreateLinkRequest, ICreateLinkResponse } from "../models"
import axios, { AxiosError } from "axios"
import { ChangeEvent } from "react"
import { ApiEndpoints } from "../util/endpoints"

export function useCreateLink() {
    const [link, setLink] = useState('')
    const [name, setName] = useState('')
    const [shortLink, setShortLink] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        const request: ICreateLinkRequest = { name: name, url: link}

        try {
            const response = await axios.post<ICreateLinkResponse>(`${ApiEndpoints.createLink}`, request)

            if (response.data.success && !response.data.errors) {
                setShortLink(`${ApiEndpoints.frontHost}` + response.data.message)
            } else {
                setError(true)
            }
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(true)
            setErrorMessage(error.message)
        }
    }

    const changeLinkHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value)
        setError(false)
    }

    const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        setError(false)
    }

    const copyShortLink = async (event: any) => {
        try {
            await navigator.clipboard.writeText(shortLink);
          } catch (err) {
          }
    }

    return { link, name, shortLink, error, errorMessage, submitHandler, changeLinkHandler, changeNameHandler, copyShortLink }
}