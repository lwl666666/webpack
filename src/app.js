import Layer from "./components/layer/layer.js";
import commonCss from "./common/common.css";

var app = document.getElementById("app");
var layer = new Layer();
app.innerHTML = layer.tpl({
	arr:['123','123','321']
});