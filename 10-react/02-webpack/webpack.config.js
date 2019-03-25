
const config = {
    "entry": __dirname+"/src/index.js",
    "output": {
        "path": __dirname+"/output",
        "filename": "bundle.js"
    },
    "devServer":{
        "contentBase": "./output"
    }

}



module.exports = config;