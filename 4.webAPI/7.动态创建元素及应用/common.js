function my$(id) {
    return document.getElementById(id)
}


 // 处理浏览器兼容性
//  获取第一个子元素
 function getFirstElementChild() {
    var node, nodes = this.childNodes, i = 0;

    while(node = nodes[i++]) {

        if (node.nodeType === 1) {
            return node
        }
    }
    return null
  }

  //获取下一个兄弟元素
  function nextElementSibling(element) {
    var el = element
    while(el = el.nextSibling) {
        if (el.nodeType === 1){
            return el
        }
    }
    return null
}

// 处理innerText和innerContent之间的兼容性问题
// 设置标签之间的内容
function setInnerText(element,content) {
    // 判断当前浏览器是否支持innerText
    if (typeof element.innerText === 'string'){
        element.innerText = content
    } else {
        element.textContent = content
    }
}