
import axios from 'axios';

interface UseTodoListReturns {
  /** TodoListの取得 */
  fetchTodoList: () => Promise<void>;
}

interface Todo {
  id: string;
  title: string;
  text: string;
}

const url = `/todo_list`;

export const UseTodoList = (): UseTodoListReturns => {
  const fetchTodoList = async (): Promise<void> => {
    try {
      const response = await axios.get<Todo[]>(`${url}/todo_list`);
      console.log('Fetched Todo List:', response.data);
    } catch (error) {
      console.error('Todo リストの取得に失敗しました:', error);
      throw error;
    }
  };
  return {
    fetchTodoList,
  };
};
