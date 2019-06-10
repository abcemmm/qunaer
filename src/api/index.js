import axios from 'axios'

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data.data;
  }
);

//请求home组件数据接口
export let gethome = () => {
    return axios.get("/static/mock/index.json")
}
//请求city组件数据接口
export let getCity = () => {
  return axios.get("/static/mock/city.json")
}

//请求detail组件数据接口
export let getDetail = (id) => {
  return axios.get('/static/mock/detail/'+id+'.json')
}

//请求week组件数据接口
export let getWeeks = (id) => {
  return axios.get('/static/mock/week/'+id+'.json')
}