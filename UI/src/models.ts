export interface ILink {
    id: number
    name: string
    url: string
}

export interface ICreateLinkRequest {
    id?: number
    name?: string
    url: string
}

export interface ICreateLinkResponse {
    id: number
    success: boolean
    message: string
    errors: string[]
}