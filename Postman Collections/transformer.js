const fs = require("fs")
const axios = require("axios")

const getMainCollection = async () => {
   const POSTMAN_JSON_DATA = [
      "https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/instances-api.json",
      "https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/auth-api.json",
      "https://raw.githubusercontent.com/zesty-io/zesty-org/master/Postman%20Collections/accounts-api.json",
   ]
   const mainCollection = []
   const getPostmanData = async () => {
      for (const url of POSTMAN_JSON_DATA) {
         await axios.get(url).then((e) => {
            mainCollection.push(e.data)
         })
      }
   }

   await getPostmanData()
   return mainCollection
}

const main = async () => {
   const data = await getMainCollection()
   const jsonData = JSON.stringify(data)
   // Write the JSON data to a file
   fs.writeFile("example.json", jsonData, "utf8", (err) => {
      if (err) {
         console.error(err, 123)
      } else {
         console.log("Data written to file")
      }
   })
}

main()
