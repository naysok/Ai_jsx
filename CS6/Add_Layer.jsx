// include other js/jsx file
#include "../ny_modules/Get_Current_Time.js"
// #include "./Get_Current_Time.jsx"
var r = currentTime();


// alert("Date : " + r.d);
// alert("Time : " + r.t);



var doc = app.activeDocument;

var new_layer = doc.layers.add();
new_layer.name = r.d + "_" + r.t;
alert("Add Layer!");



var layer_name = new_layer.name;
alert("Layer Name : " + layer_name);