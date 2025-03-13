
//holding the api base URL 


const ENV = 'developement' ; 

//prod : https://neuroflow-backend.onrender.com/api/

//dev : "http://127.0.0.1:8000/api/"

let BASE_API_URL = ""

const config = {
    developement : {
        API_URL : "http://127.0.0.1:8000/api/"
    }
}



export default BASE_API_URL = config[ENV].API_URL;