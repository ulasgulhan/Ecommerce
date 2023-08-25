import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTIwZjQyNDkyZjNiNjMxMmVjMDJmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjgwMjQzNiwiZXhwIjoxNjkzMDYxNjM2fQ.hISL61Loaap1NLv8JFSMcQpLt41MwOKvGUhzcRMLrOE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})
