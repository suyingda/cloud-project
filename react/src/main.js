import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.name = "name";
        this.age = "age";
    }

    static PropTypesa = {
        one: "string"
    };

    static autoFunction(get) {
        (() => {
            let arrayData = Object.getOwnPropertyNames(get.__proto__)
            // console.log(get.constructor.havePropTypes['b']=1)
            for (let i in arrayData) {
                if (['constructor', 'render'].includes(arrayData[i])) {
                    continue
                }
                const arrayd = get[arrayData[i]].toString().match(/(?:\/\*[\s\S]*?\*\/|\/\/.*?\r?\n|[^{])+\{([\s\S]*)\}$/)[1]
                console.log(arrayd)
            }
            // var getAllPropertyNames = function (get) {
            //     var props = [];
            //     do {
            //         props = props.concat(Object.getOwnPropertyNames(get));
            //     } while (get = Object.getPrototypeOf(get));
            //     return props;
            // }
            // var propertys = getAllPropertyNames(window);
            // console.log(propertys.length,'//123');          //276
            // console.log(propertys.join("\n"),'toSting');      //toString等
            console.log(get, '6666666666666', get.componentDidMount)
        })()
        return Parent.PropTypesa
    }

    f() {
        console.log(1)
    }

    render() {
        return <div>parent C</div>
    }
}

class Children extends Parent {
    constructor(props) {
        super(props);
        Parent.autoFunction(this)
    }

    static havePropTypes = {
        a: 1,
    };
    getId = React.createRef();

    componentDidMountadfadsff() {
        const variable = {}

    }

    copyOne() {
        const variableTwo = 21;
    }

    render() {
        const a = 1;
        return <div>children C{a}</div>;
    }


}

console.log((new Children));


ReactDOM.render(
    <Children/>,
    document.querySelector('#root')
);

