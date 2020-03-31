
const INSERT = 'INSERT';
const REMOVE = 'REMOVE';

let { createElement } = require('./Element');

// let oldChildren = createElement('ul', { 'class': 'list' }, [
//     createElement('li', { 'class': 'item', key: 1 }, ['1']),
//     createElement('li', { 'class': 'item', key: 2 }, ['2']),
//     createElement('li', { 'class': 'item', key: 3 }, ['3'])
// ])
let oldChildren = [
    createElement('li', { 'class': 'item', key: "a" }, ['a']),
    createElement('li', { 'class': 'item', key: "b" }, ['b']),
    createElement('li', { 'class': 'item', key: "c" }, ['c']),
    createElement('li', { 'class': 'item', key: "d" }, ['d']),
]
let newChildren = [
    createElement('li', { 'class': 'item', key: "d" }, ['d']),
    createElement('li', { 'class': 'item', key: "b" }, ['b']),
    createElement('li', { 'class': 'item', key: "c" }, ['c']),
    createElement('li', { 'class': 'item', key: "a" }, ['a']),
]

let ul = document.createElement('ul');
oldChildren.forEach((item) => ul.appendChild(item.render()));
document.body.appendChild(ul);
let patches = []
function diff(oldChildren, newChildren) {
    let newChildrenKey = newChildren.map((item) => item.attrs.key);
    //frist
    oldChildren.forEach((item, index) => {
        if (!newChildrenKey.includes(item.attrs.key)) {
            remove(REMOVE, item.attrs.key, index);
            oldChildren.splice(index, 1)
        }
    })

    //second
    let oldChildrenIndex = 0;
    let newChildrenIndex = 0;
    while (newChildrenIndex < newChildren.length) {
        let newKey = (newChildren[newChildrenIndex] || {}).attrs && (newChildren[newChildrenIndex] || {}).attrs.key;
        let oldkey = (oldChildren[oldChildrenIndex] || {}).attrs && (oldChildren[oldChildrenIndex] || {}).attrs.key;
        if (newKey !== oldkey) {
            insert(INSERT, newKey, newChildrenIndex, newChildren[newChildrenIndex])
            newChildrenIndex++
        } else if (!oldkey) {
            insert(INSERT, newKey, newChildrenIndex, newChildren[newChildrenIndex])
            newChildrenIndex++
        } else {
            oldChildrenIndex++
            newChildrenIndex++
        }

    }
    //three
    while (oldChildrenIndex++ < oldChildren.length) {

        remove(REMOVE, '', newChildrenIndex)
    }
    function remove(types, key, index) {
        patches.push({ types, key, index })
    }
    function insert(types, key, index, node) {
        patches.push({ types, key, index, node })
    }
    return patches
}
let patch = diff(oldChildren, newChildren)
console.log(patch)

patch.forEach((item) => {
    switch (item.types) {
        case REMOVE:
            let re = ul.childNodes[item.index]
            ul.removeChild(re);
            break;
        case INSERT:
            let rse = ul.childNodes[item.index]
            if (rse) {
                ul.insertBefore(item.node.render(), rse);
            } else {
                ul.appendChild(item.node.render())
            }
            break;
        default:
            throw new Error('没有补丁')
            break;
    }
})

