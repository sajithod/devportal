export interface ServerVariables {
    [name: string]: string;
}
export interface Server {
    url: string;
    variables: ServerVariables;
}
