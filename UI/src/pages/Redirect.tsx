import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { RedirectComponent } from "../components/Redirect"

export function RedirectPage() {
    const [searchParams, setSearchParams ] = useSearchParams()

    return (
        <RedirectComponent />
    )
}