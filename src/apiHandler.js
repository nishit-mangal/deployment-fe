import axios from "axios";
let url = "//13.233.53.159:8000/visited"
// let url = "http://localhost:8000/visited";

export async function callApiToRegisterUser(name) {
  let data = {
    name: name,
  };
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    data: data,
  };
  try {
    let response = await axios(config);
    console.log(response.data);
    if(response.data.status!=='Success'){
        throw response.data.data
    }
    return response.data.data;
  } catch (err) {
    console.log(`Error ${err}`)
    return null;
  }
}
