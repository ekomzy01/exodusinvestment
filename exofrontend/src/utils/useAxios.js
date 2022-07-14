import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import Axios from 'axios'
import dayjs from 'dayjs'


const baseURL = 'http://127.0.0.1:8000'
const useAxios = () => {
    const {authToken, setUser, setAuthToken} = useContext(AuthContext)
    const axiosInstance = axios.create({
        baseURL,
        Headers: {Authorization: `Bearer ${authToken?.access}`}
    })
    axiosInstance.interceptors.request.use(async req => {
        const user = JSON.stringify(authToken.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

        if (isExpired) return req
        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authToken.refresh
        })
        localStorage.setItem('authToken', JSON.stringify(response.data))
        setAuthToken(response.data)
        setUser(JSON.stringify(response.data.access))
        req.Headers.Authorization = `Bearer ${response.data.access}`
        return req
    })
  return axiosInstance
}

export default useAxios