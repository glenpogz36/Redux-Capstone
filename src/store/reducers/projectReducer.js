const initState = {
    projects: [
        { id: '1', title: 'Test1', content: 'Content1' },
           { id: '2', title: 'Test1', content: 'Content2' },
              { id: '3', title: 'Test1', content: 'Content3' }
    ]
}
const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer