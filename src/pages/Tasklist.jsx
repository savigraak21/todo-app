import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import Popup from '../Components/Popup';

const reducer=(state,action)=>{
    switch(action.type){
      case"view":return {dataType:"view",data:action.payload};
      case"edit":return {dataType:"edit",data:action.payload};
      case"delete":return {dataType:"delete",data:action.payload};
      default:return state;
    }
  }
function TaskList(props) {
    const { allTasks} = useContext(TaskContext);
    const[state,dispatch]=useReducer(reducer,null);
 

const[filteredtasks,setfilteredtasks]=useState(allTasks);
useEffect(()=>{
    setfilteredtasks(allTasks)
},[allTasks])
const handleSearch=(e)=>{
    let{value}=e.target;
    const filteredArr= allTasks.filter((task)=>{
        return task.title.includes(value);
    })
    setfilteredtasks(filteredArr);

    
    
} 

   
    return (
        <div className='container'>
            <div className='p-5 bg-primary mt-5 text-white'>
                <div className='d-flex mb-2'>
                    <h3>Task List</h3>
                    <Link className='btn btn-info ms-auto' to="/create-task">Create Task</Link>
                </div>
                <div className="py-2">

                  
                    <input type="text" className="form-control" placeholder='Search Task'  onChange={handleSearch} />
                
                </div>

                <div className='py-3'>
                    <div className='row border border-light py-2 text-warning'>
                
                        
                        <div className='col-1'>Id</div>
                        <div className='col-2'>Title</div>
                        <div className='col-5'>Description</div>
                        <div className='col-2'>Due Date</div>
                        <div className='col-2'>Actions</div>
                    </div>
                    {
                        filteredtasks?.map((task,index) => {
                               
                           

                            return (

                                <div className='row border border-light py-2'>
      
                                    <div className='col-1'>{index+1}</div>
                                    <div className='col-2'>{task?.title}</div>
                                    <div className='col-5'>{task?.description}</div>
                                    <div className='col-2'>{task?.duedate}</div>
                                    <div className='col-2'>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faEye} onClick={()=>{dispatch({type:"view",payload:task})}} />
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{dispatch({type:"edit",payload:task})}} />
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faTrash}  onClick={()=>{dispatch({type:"delete",payload:task})}}/>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Popup dataType={state?.dataType} data={state?.data}/>
        </div>
    );
}

export default TaskList;