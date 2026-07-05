import type {Application} from "./application"

export interface User {
    id: string,
    email: string,
    admin?: boolean,
    application: Application | null,
    date?: any
}