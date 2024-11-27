import { useState, useEffect } from "react"
import { ILink } from "../models"
import { AxiosError } from "axios"
import axios from "axios"
import { ApiEndpoints } from "../util/endpoints"

export function useLinks() {
    const [links, setLinks] = useState<ILink[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchLinks() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<ILink[]>(`${ApiEndpoints.getLinks}`)
            setLinks(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }        
    }

    useEffect( () => {
        fetchLinks()
    }, []) //}, [links])

    return { links, loading, error }
}