
const config = {
    "entry": __dirname + "/src/index.js",
    "output": {
        "path": __dirname + "/dist",
        "filename": "bundle.js"
    },
    "module": {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    },
    "devServer": {
        "contentBase": "./dist"
    }

}

module.exports = config;