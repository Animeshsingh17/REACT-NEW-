import React, { useState } from 'react'

function List(props) {
    const data=props.employeeJSON
    console.log(data,"hello")
    const [modalData,setModalData]=useState({});
    const [modalWindow,setModalWindow]=useState(false);
    const editData=()=>{
        console.log(props.editEmp(data))
    }

    const deleteData =()=>{
    console.log(props.deleRecdata.id)
    }
  return (
    <div>
        {data.map((rec)=>{
        return( 
            <div>
                <ul>
              <li>{rec.Name}</li>
        <li>{rec.empID}</li>
        <li>{rec.City}</li>
        </ul>
        <button onClick={editData}>EDIT</button>
        <button onClick={deleteData}>DELETE</button>
            </div>    
        )})}
    </div>
  )
}

export default List