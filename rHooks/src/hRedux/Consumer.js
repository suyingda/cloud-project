import React from 'react';
import {AppContext} from './index'
import * as config from './store'

const {store} = config;
export default function Consumer() {
    const getAllBy = Array.prototype.slice.call(arguments);
    const [MapToProps, Template] = getAllBy;
    const {mapStateToProps, mapDispatchToProps} = MapToProps || {};
    return () => <AppContext.Consumer>
        {(value) => {
            let getMapDispatchToProps = {};
            Object.keys(mapDispatchToProps).forEach((items) => {
                getMapDispatchToProps[items] = (params) => store.dispatch(mapDispatchToProps[items](value,params));
            });
            console.log(getMapDispatchToProps)
            const getProps = {...value, ...getMapDispatchToProps};
            return <Template {...getProps} />

        }}
    </AppContext.Consumer>
}
