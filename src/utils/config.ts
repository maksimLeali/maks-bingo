const env = import.meta.env

export const config = {
    debug : env.MODE == 'development',
    default_language: env.VITE_DEFAULT_LANGUAGE
}