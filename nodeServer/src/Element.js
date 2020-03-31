let utils = require('./utils.js')
class virtualDom {
    constructor(tagName, attrs, children) {
        this.tagName = tagName;
        this.attrs = attrs;
        this.children = children || [];
    }
    render() {
        // 创建一个真实的dom节点
        let element = document.createElement(this.tagName);
        // 给真实的dom节点增加属性
        for (let attrs in this.attrs) {
            utils.setAttri(element, attrs, this.attrs[attrs])
        }
        this.children.forEach(child => {
            let newCreateNode;
            if (typeof child === 'object') {
                newCreateNode = child.render();  //调用render() 方法 生成遍历到的节点 承前启后的方法（深度遍历优先）
            } else {
                newCreateNode = document.createTextNode(child);  //创建一个文本节点
            }
            element.appendChild(newCreateNode)
        });
        return element;
    }
}
function createElement(tagName, attrs, children) {
    return new virtualDom(tagName, attrs, children)
}
module.exports = { createElement }
