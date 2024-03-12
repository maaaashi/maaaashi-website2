import { kv as k } from '@vercel/kv'

// 暫定対応
process.env.KV_REST_API_URL = import.meta.env.KV_REST_API_URL
process.env.KV_REST_API_TOKEN = import.meta.env.KV_REST_API_TOKEN
export const kv = k
