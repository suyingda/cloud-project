import React from 'react';
import CrashJsx from "./Crash";



export default function __Prototype__(){
        return <div>
            <CrashJsx/>
            余弦定理
            余弦定理：三角形任何一边的平方等于其他两边的平方和减去这两边与它们夹角的余弦的积的两倍。
            <br/>


            [[prototype]]和prototype和__proto__
            请注意！上面标题的第一个prototype外面有两层[]包裹！[[prototype]] !== prototype！
            [[prototype]]是对象的私有属性，而prototype却是只有函数才有的属性！
            __proto__是JS的非标准但许多浏览器实现的属性，即[[prototype]]，也就是someObject.[[Prototype]] === someObject.__proto__，当然如果你在控制台操作的话会报错，因为浏览器并没有实现someObject.[[Prototype]]这样的操作，所以你如果非要验证的话请使用ES6支持的Object.getPrototypeOf()方法，即Object.getPrototypeOf(someObject) === someObject.__proto__

            针对你问题的答案就是：所有javascript对象都有一个指向它的原型对象的内部链接[[prototype]]，但只有函数对象才有prototype这个属性？


        {/*
        function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
        */}
        </div>
}
