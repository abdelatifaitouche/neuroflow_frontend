
//holding the api base URL 


const ENV = 'developement' ; 

let BASE_API_URL = ""

const config = {
    developement : {
        API_URL : "https://neuroflow-backend.onrender.com/api/"
    }
}



export default BASE_API_URL = config[ENV].API_URL;