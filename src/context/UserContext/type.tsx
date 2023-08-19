import { User } from '@firebase/auth-types'

export type TUserContext = { 
    login: (email: any, password: any) => void,
    user: User | null,
} | null