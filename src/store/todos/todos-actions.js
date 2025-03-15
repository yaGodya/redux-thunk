import { client } from "../../api";

export const ADD_TODOS = "@@todos/ADD_TODOS";
export const SET_LOADING = "@@todos/SET_LOADING";
export const SET_ERROR = "@@todos/SET_ERROR";

const addTodo = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
});

 const setLoading = () => ({
    type: SET_LOADING,
});
const setError = (err) => ({
  type: SET_ERROR,
  payload: err
});

const url = "https://jsonplaceholder.typicode.com/todos";

export const loadTodo = () => (dispatch) => {
  dispatch(setLoading())

    client(url)
        .then((data) => dispatch(addTodo(data)))
        .catch((err) => dispatch(setError(err)));
};
