var blog = require('../controllers/ctl_blog');

exports.newBlog = function (req, res) {
    // var jsonData = convertReqToJson(req, res);
    //TODO check
    //TODO log
    var test = req.body;
    console.log("output req body");
    console.log(test);

    var jsonData = {};
    //just for test
    jsonData.title = "Main Title";
    jsonData.discription = "Main Title";
    jsonData.content = "This is An article";
    jsonData.cover_img = "";
    jsonData.createdate = "20161228";
    jsonData.updatedate = "20161228";
    jsonData.creator_info = {
        name: "Test01",
        sex: "Male",
        age: 20,
        tel: "111-222-3333",
        id: 10000,
        tips: ""
    };



    blog.newBlog(jsonData, function (err, result) {
        //TODO log
        console.log("create a new blog");
        res.render('home',{
            "data" : result
        });
    })
}