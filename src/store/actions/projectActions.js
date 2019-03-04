export const createProject = (project) => {
    return(dispatch, getState, {getFirebase, getFirestore})=>{
//make a ASYNC call to database
dispatch ({type: 'CREATE_PROJECT', project})
    }
}