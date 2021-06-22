import axios from "axios";

 export default {
    getEmployee: function() {
      console.log("hi");
        return axios.get("https://randomuser.me/api/?results=50");
      }
};