const env = import.meta.env

export const config = {
    debug : env.MODE == 'development',
    api_url: env.VITE_API_URL,
}