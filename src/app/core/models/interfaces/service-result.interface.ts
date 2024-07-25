export interface IServiceResult<T>{
    result: T,
    hasError : boolean,
    message?: string 
}