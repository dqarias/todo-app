import React from 'react';
import Header from './Header';
import TodoList from './TodoList'

class TodoContainer extends React.Component {
    state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };

    handleChange = (id) =>{
        console.log(`clicked ${id}`)
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                return{
                    ...todo,
                    completed: !todo.completed,
                }
              }
              return todo
            }),
          }))
    }

    delTodo = (id) => {
        console.log("Clicked delete", id)
        this.setState({
            todos: [
            ...this.state.todos.filter(todo=>{
                return todo.id !== id 
            })
        ]
    })
    }

    render() {
      return (
        <div>
            <Header />
            <TodoList 
            todos={this.state.todos} 
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}/>
        </div>
        /* { <ul>
          {this.state.todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))}
        </ul> } */
      );
    }
}

export default TodoContainer;
