import axios from "axios";
let getUsers;
let getPosts;

async function getData(Number) {
  getUsers = await (await axios.get("https://dummyjson.com/users/" + Number)).data
  console.log(getUsers);
  getPosts = await (await axios.get("https://dummyjson.com/posts/" + Number)).data;
  console.log(getPosts)

}
export default getData;




