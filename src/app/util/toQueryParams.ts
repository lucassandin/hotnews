export const toQueryParams = (obj: object) => {
    return obj !== undefined ? Object.entries(obj).filter((x) => x[1] !== undefined && x[1] !== '' && x[1] !== null).map((x) => `${x[0]}=${x[1]}`).join('&') : ''
}