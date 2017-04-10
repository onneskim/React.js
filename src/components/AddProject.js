import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state= {
      newproject: []
    }
  }

  static defaultProps = {
    categories: ['web design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){ //this prevents submition of blank forms
      alert('Title is required, damn it!!');
    }else {
      this.setState({newProject: {//otherwise it will set the new state to what the category and value the user input.
        title: this.refs.title.value,
        category: this.refs.category.value
      }},function(){//can also add another variable which can be a call back function.
        //console.log(this.state); //logs the sate on the console for testing
        this.props.AddProject(this.state.newproject);//adds a property of the new component to a new state.
      });
    }
    e.preventDefault();
  }
  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    });


    return (
      <div>
          <h3> Add Projects </h3>
          <form onSubmit={this.handleSubmit.bind(this)}> //bind 'this' with handleSubmit
            <div>
              <label> Title </label><br/>
              <input type="text" ref="title" />
            </div>
            <div>
              <label> Category </label><br/>
              <select ref="category" >
                {categoryOptions}

              </select>
            </div>
            <input type="submit" value="submit" />

          </form>
      </div>
    );
  }
}

export default AddProject;
