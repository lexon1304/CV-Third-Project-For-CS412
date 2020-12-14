function color() {
document.getElementById('myimage').src = "profile.jpg";
}
function black() {
document.getElementById('myimage').src = "profile2.png";
}
function displayText(obj) {
var obj=document.getElementById(obj);
if (obj.style.display == "block") obj.style.display = "none";
else obj.style.display = "block";
}