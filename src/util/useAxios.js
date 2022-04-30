import axios from 'axios'
import { useContext } from 'react'
import { UserContext, UserContextUpdate } from '../contexts/UserContext'

export default function useAxios() {
    const user = useContext(UserContext)
    const userUpdate = useContext(UserContextUpdate)

    axios.interceptors.request.use(
        request => {
            // console.log('Intercept!')
            return request
        },
        error => {
            console.log("=Request Error")
            return Promise.reject(error)
        }
    )
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.data?.message === "Invalid token") refetchToken()
            return Promise.reject(error);
        }
    );

    const refresher = axios.create()

    const refetchToken = async () => {
        console.log("=Token Error")
        // const { data } = refresher.post("https://api.knaqapp.com/api/refresh_token", {}, { headers: { Authorization: `Bearer ${user.token}` } })
        // console.log(data)
    }

    // console.log("inside hook")
}