document.body.style.backgroundColor="black";
document.body.style.color="white";


function modifyElementStyle(tagName) {
	var input = document.getElementsByTagName(tagName);
    var eleList = Array.prototype.slice.call(input);
    eleList.forEach(ele => {
    	ele.style.color="white";
    	ele.style.backgroundColor="black";
    });           
}

modifyElementStyle("a");
modifyElementStyle("li");
modifyElementStyle("td");
modifyElementStyle("span");
modifyElementStyle("div");
modifyElementStyle("h1");
modifyElementStyle("h2");
modifyElementStyle("yt-formatted-string");
