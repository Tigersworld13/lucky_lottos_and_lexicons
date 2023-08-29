import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});