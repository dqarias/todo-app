import React, {Component} from "react";

class InputTodo extends Component{

    state = {
        title : ""
    };

    onChange = (e) =>{
        console.log(e)
       this.setState({
        [e.target.name] : e.target.value
       })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.title.trim()){
            console.log(this.state.title)
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: ""
            })
        }else{
            alert("Please write item")
        }
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add Todo..." 
                    value={this.props.title} 
                    name="title"
                    onChange={this.onChange}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo;