import { useState, useEffect } from "react"
import { ILink } from "../models"
import { AxiosError } from "axios"
import axios from "axios"

export function useLinks() {
    const [links, setLinks] = useState<ILink[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchLinks() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<ILink[]>("https://myurl")
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
    }, [])

    return { links, loading, error }
}