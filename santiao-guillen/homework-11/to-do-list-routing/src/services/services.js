import axios from "axios";

const url = "http://localhost:3001/task/";

export const getTasks = async () => {
    const result = await axios.get(url);
    return result.data;
}

export const createTask = async (task) => {
    let result = await axios.post(url,task);
    return result.data;
}

export const getTaskForId = async (id) => {
    let result = await axios.get(url + id);
    return result.data;
}