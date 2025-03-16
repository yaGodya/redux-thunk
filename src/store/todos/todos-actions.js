export const ADD_TODOS = "@@todos/ADD_TODOS";
export const SET_LOADING = "@@todos/SET_LOADING";
export const SET_ERROR = "@@todos/SET_ERROR";
export const ADD_TODO = "@@todos/ADD_TODO";

const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});
const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
});

const setLoading = () => ({
    type: SET_LOADING,
});
const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
});

const url = "https://jsonplaceholder.typicode.com/todos";

export const loadTodo = () => (dispatch, _, client) => {
    dispatch(setLoading());

    client
        .get(url)
        .then((data) => dispatch(addTodos(data)))
        .catch((err) => dispatch(setError(err)));
};

export const createTodo = (title) => (dispatch, _, client) => {
    client
        .post(url, {
            title,
            completed: false,
            userId: 1,
        })
        .then((newTodo) => dispatch(addTodo(newTodo)))
        .catch((err) => dispatch(setError(err)));
};
