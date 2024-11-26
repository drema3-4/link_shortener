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
    success: true
    message: string
    errors: string[]
}