import React, {useEffect} from 'react';
import Consumer from "../hRedux/Consumer";
import ModuleContent from '../module/ModuleContent'

function Index(props) {
    useEffect(() => {
        console.log(props, 'content')
    });
    return <div>
        <div onClick={() => {
            props.oneActions('我是参数');
        }}>
            11111
        </div>
        <h1>
            age:{props.age}<br/>
            name:{props.name}
        </h1>
    </div>
}

const mapStateToProps = () => {

};
const mapDispatchToProps = {
    ...ModuleContent.reducer
};

export default Consumer({mapStateToProps, mapDispatchToProps}, Index)
