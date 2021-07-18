import React,{useState} from 'react'

const TodoComponent = () => {
    const [todolist,setTodolist]=useState([{name:"first one",checked:false},{name:"Second one",checked:true}]);

    const [name,setName]=useState("")

    const handelForm =(e)=>{
        e.preventDefault();
        setTodolist(todolist.concat({name:name,checked:false}));
        setName("");
    }

    const clickHandler =(k)=>{
        const newArr=[...todolist];
        newArr[k].checked=!newArr[k].checked;
        setTodolist(newArr);
    }

    const deleteHandler = (k) =>{
        const newArr=[...todolist];
        newArr.splice(k,1);
        setTodolist(newArr);
    }

    return (
        <>
        <form onSubmit={handelForm}>
            <textarea onChange={e =>setName(e.target.value) } value={name}/>
            <input type='submit' value='Add' ></input>
        </form>
        <div>{
            todolist.map((item,i) =>{
                return<div key={i}>
                <p style={{textDecoration: item.checked?"line-through":"none"}}> {item.name}</p>
                    <input type="checkbox"  checked={item.checked} onClick={()=>clickHandler(i)} />

                    <input type="button" value="Delete" onClick={()=>deleteHandler(i)}/>
                    </div>
            })
        }
        </div>
        </>
    )
}

export default TodoComponent