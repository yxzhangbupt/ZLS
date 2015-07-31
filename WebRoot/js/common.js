/**
 * 所有文档公用的js文件，定义了XHR对象
 */
function createXHR(){
	var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
}