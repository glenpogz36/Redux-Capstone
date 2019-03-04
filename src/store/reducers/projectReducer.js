const initState = {
    projects: [
        { id: '1', title: 'Test1', content: 'Content1' },
        { id: '2', title: 'Test2', content: 'Content2' },
        { id: '3', title: 'Test3', content: 'Content3' }
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREAT_PROJECT_ERROR':
            console.log('created project error', action.err)
            return state;
        default:
            return state;
    }

}

export default projectReducer