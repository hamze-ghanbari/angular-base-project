export interface IUser{
    activation: number,
    activation_date: string | null,
    birth_date: string | null,
    created_at: string | null
    deleted_at: string | null,
    email: string | null,
    email_verified_at: string | null,
    first_name:string | null,
    id: number,
    last_name: string | null,
    mobile: string,
    mobile_verified_at: string | null,
    national_code: string | null,
    permissions: any[],
    roles: any[],
    status: boolean,
    updated_at: string | null
}