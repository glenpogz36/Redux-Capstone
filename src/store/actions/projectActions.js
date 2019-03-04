export const createProject = (project) => {
    return(dispatch, getState)=>{
//make a ASYNC call to database
dispatch ({type: 'CREATE_PROJECT', project})
    }
}