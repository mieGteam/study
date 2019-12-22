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


//  处理注册事件的兼容性问题   
    // eventName  不带on   click  mouseover  mouseout
    function addEventListener(element, eventName, fn)  {
        // 判断当前浏览器是否支持addEventListener 方法
        if(element.addEventListener) {
            element.addEventListener(eventName, fn)    //第三个参数默认是false
        }else if (element.attachEvent) {
            element.attachEvent('on'+ eventName, fn)
        }else {
                // 相当于 element.onclick = fn
            element['on' + eventName] = fn
        }
    }