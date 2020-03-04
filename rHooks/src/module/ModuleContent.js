const ModuleContent = {
    name: 'ModuleContent',
    state: {},
    actions: {},
    reducer: {
        oneActions: (state, a) => {
            return {
                type: 'aaaa',
                reducer(state) {
                    return {
                        ...state,
                        age: state.age + 1
                    }
                }
            }
        }
    }
};
export default ModuleContent
