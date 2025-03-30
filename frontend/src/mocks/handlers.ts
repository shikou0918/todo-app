import { http } from 'msw'
import todoList from './todoList';
const baseUrl = 'https://example.com'

export const handlers = [
    http.get(`${baseUrl}/connect/token`, todoList.get),
]