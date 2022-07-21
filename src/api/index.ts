import request, { axiosInstance } from '~/utils/http'

export const getList = () => request<{ a: number; b: number }>({ url: '/api/list' })

export const getWikiList = () => axiosInstance({ url: 'api/log/td/http/record/list' })
// export const getWikiList = () => request<{ name: string }>({ url: 'api/log/td/http/record/list' })

export const getTime = () => new Date().toLocaleString()
