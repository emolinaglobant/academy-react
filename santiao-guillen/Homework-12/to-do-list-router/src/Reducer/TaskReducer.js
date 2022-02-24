
const initialState = {
    task: [],
    taskDetail: []
}


export const taskReducer = (state = initialState, action) => {

    if (action.type === '@task/createTask') {
        return state, {
            task: [...state.task, action.payload]
        }
    }

    if (action.type === '@task/getDetailsTask') {
        let id = action.payload
        let task = state.task;

        let value = task.filter((task) => (task.id === id));
        return state, {
            ...state,
            taskDetail: value
        }
    }

    return state;
}

export const createTask = (id, title, description) => {
    return {
        type: '@task/createTask',
        payload: {
            id,
            title,
            description
        }
    }
}

export const getDetailsId = (id) => {
    return {
        type: '@task/getDetailsTask',
        payload: id
    }
}

