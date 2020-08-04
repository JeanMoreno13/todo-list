import React, {Component} from "react";

const Tasks = ({detailsTask, deleteTask}) => (  
    <li>
        {detailsTask.nom}
        <button onClick={()=>deleteTask(detailsTask.id)}>X</button>
    </li>
);

export default Tasks;