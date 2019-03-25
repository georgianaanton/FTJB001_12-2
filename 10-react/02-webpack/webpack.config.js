
const config = {
    "entry": __dirname+"/src/index.js",
    "output": {
        "path": __dirname+"/dist",
        "filename": "bundle.js"
    },
    "devServer":{
        "contentBase": "./dist"
    }
   
}



module.exports = config;