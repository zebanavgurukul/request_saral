const request = require("request")
const fs = require("fs"); //File System module
request("http://saral.navgurukul.org/api/courses",function(userData,bodyData,body){
    // console.log(body);
    var saral_data = body;
    // console.log(saral_data);
    var obj = JSON.parse(saral_data);
    // console.log(obj);
function request_1(all_courses){
    let data = []
    for (var i = 0; i < all_courses["availableCourses"].length;i++){
        var course = all_courses["availableCourses"][i]["name"];
        var id = all_courses["availableCourses"][i]["id"];
        // console.log(course,id);
    data.push(course);
    data.push(id);
    // console.log(alldata)
    let data_1 = JSON.stringify(data);
    fs.writeFileSync("courses_data.json", data_1);
        console.log(data_1);
    fs.readFile("courses_data.json", (err, data_1) => {
        if (err) throw err;
        let courses_data = JSON.parse(data_1);
        console.log(courses_data);
    });
    console.log('This is after the read call')
};
};
request_1(obj);
});