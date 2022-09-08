import React from "react";
function TodoItem(props) {
    function handlecClick(){
        props.onDelete(props.todo);
    }
    return (
        <>
            <div className="note" >
                <h1>{props.todo.title}</h1>
                <div className="del">
                    <button className="btn btn-sm btn-danger" onClick={handlecClick}>
                        Delete
                    </button>
                </div>
                <div className="desc">
                    <p>{props.todo.desc}</p>

                </div>
            </div>
          
        </>
            
        
    );
}
export default TodoItem;