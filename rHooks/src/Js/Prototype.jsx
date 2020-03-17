import React from 'react';



export default function __Prototype__(){
        return <div>
            [[prototype]]和prototype和__proto__
            请注意！上面标题的第一个prototype外面有两层[]包裹！[[prototype]] !== prototype！
            [[prototype]]是对象的私有属性，而prototype却是只有函数才有的属性！
            __proto__是JS的非标准但许多浏览器实现的属性，即[[prototype]]，也就是someObject.[[Prototype]] === someObject.__proto__，当然如果你在控制台操作的话会报错，因为浏览器并没有实现someObject.[[Prototype]]这样的操作，所以你如果非要验证的话请使用ES6支持的Object.getPrototypeOf()方法，即Object.getPrototypeOf(someObject) === someObject.__proto__

            针对你问题的答案就是：所有javascript对象都有一个指向它的原型对象的内部链接[[prototype]]，但只有函数对象才有prototype这个属性？
        </div>
}
