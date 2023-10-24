import axios from "axios";
import { useNavigate } from "react-router";

//local
axios.defaults.baseURL = 'http://localhost:8080';
//host
//axios.defaults.baseURL = 'https://testbackend-9g7x.onrender.com';
axios.defaults.headers.post["Content-Type"] = 'application/json'
//axios.defaults.headers.common['Authorization']=''



export const getAuthToken = () =>{
  return window.localStorage.getItem("auth_token");
}

export const setAuthtoken = (token) => {
  window.localStorage.setItem("auth_token", token);
}

export const cleanAuthToken = () => {

  window.localStorage.clear();

}


export const request = ( method, url, data)=>{
    let headers = {};
    if(getAuthToken() !== null && getAuthToken() !== "null"){
      headers = {"Authorization": `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    });

};