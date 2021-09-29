import join from 'url-join'
const URLRegex=/^(?:\w+:)\/\//;
const setupAxios=(axios,store)=>{
    axios.interceptors.request.use(config => {
        const token=localStorage.getItem('token')?`Bearer ${localStorage.getItem('token')}`:null; 
        config.headers.Authorization=token;
        if(!URLRegex.test(config.url)){
            config.url= join('http://localhost:5000',config.url)
        }
        return config;
    })
}
export default setupAxios;