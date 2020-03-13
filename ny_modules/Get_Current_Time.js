function currentTime(){

    var now = new Date();

    var year = now.getFullYear();
    var month = ("000" + (now.getMonth() + 1)).slice(-2); // 0-11
    var day = ("000" + now.getDate()).slice(-2);

    var hour = ("000" + now.getHours()).slice(-2);
    var min = ("000" + now.getMinutes()).slice(-2);
    var sec = ("000" + now.getSeconds()).slice(-2);

    var ex_date = year + "/" + month + "/" + day;
    var ex_time = hour + ":" + min + ":" + sec;

    // 連想配列
    var obj = new Object();
    obj.d = ex_date;
    obj.t = ex_time;
    return obj;
};


// var r = currentTime();

// alert("Date : " + r.d);
// alert("Time : " + r.t);



