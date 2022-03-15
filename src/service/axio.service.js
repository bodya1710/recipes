import axios from "axios";
import baseURL from "../constans/urls";

export const axioService = axios.create({baseURL});