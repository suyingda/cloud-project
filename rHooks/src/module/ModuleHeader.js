const ModuleHeader = {
    name: 'ModuleHeader',
    state: {},
    actions: {},
    reducer: {
        headerActions: (state, a) => {
            return {
                type: 'bbbb',
                reducer(state) {
                    return {
                        ...state,
                        name: state.name + '1'
                    }
                }
            }
        }
    }
};
export default ModuleHeader
