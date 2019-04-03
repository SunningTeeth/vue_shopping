
var path = require("path")

var htmlWebpackPlugin = require("html-webpack-plugin")

var vueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {

    entry: path.join(__dirname, "./src/main.js"),

    output: {
        path: path.join(__dirname, "./dist"),

        filename: "bundle.js"
    },
    plugins: [

        new htmlWebpackPlugin({

            template: path.join(__dirname, "./src/index.html"),

            filename: "index.html"
        }),

        //为webpack解决.vue文件的配置
        new vueLoaderPlugin()

    ],
    module: {

        rules: [

            { test: /\.vue$/, use: ["vue-loader"] },

            { test: /\.css$/, use: ["style-loader", "css-loader"] },

            { test: /\.scss$/, use: ["style-loader", "css-loader","sass-loader"] },

            //配置图片路径的loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader?limit=7918&name=[hash:8]-[name].[ext]" },
            //limit给定的值是图片的大小，单位是字节（byte）,如果我们引用的图片，大于或者等于给
            //定的limit值，则会被不会被转为base64格式的字符串，如果图片小于给定的limit值，
            //则会被转换为base64的字符串

            //name=[hash:8]-[name].[ext]
            //[hash:8]表示需要用几位hash值----》（这个是为了防止图片重名的情况，hash值最大是32位，这里8就表示截取前8位）
            //[name]这个表示图片的名字，就是当前图片的名字
            //.[ext]表示图片是什么后缀名，这个就是什么后缀名


            //配置字体图标  注意：bootstrap4.x中将字体图片抽离了
            { test: /\.(ttf|woff|woff2|svg|eot)$/, use: "url-loader" },


            //配置babel来转换高级的es语法
            { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },


        ]
    },
    resolve: {
        //解决引入vue只是runtime的问题
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }

}