interface ErrorMessageProps {
    error: string
}

export function ErrorMessageComponent({ error }: ErrorMessageProps) {

    return (
        <p> {error} </p>
    )
}