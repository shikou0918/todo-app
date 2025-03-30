import { http } from 'msw'
import todoList from './todoList';
const baseUrl = 'http://localhost:5173'

export const handlers = [
    http.get(`${baseUrl}/todo_list`, todoList.get),
]