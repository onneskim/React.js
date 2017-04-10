import React, { Component } from 'react';
import projects from './components/projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }
  componentWillMount(){ //this is a life cycle method that gets called for a given component.
    this.setState({projects: [
      {
          title:'Business Website',
          cartegory: 'Web Design'
        },
        {
          title:'Social App',
          cartegory: 'Mobile Development'
        },
        {
          title:'Ecommerce Shopping Cart',
          cartegory: 'Web Development'
        }
    ]});
  }
  // Or allternatively: but this its not recommended to put your data on the
  // same page as your code.
  // this.state = {
  //    projects:[
  //      {
    //title:'Business Website',
    //cartegory: 'Web Design'
  //},
  //{
  //  title:'Social App',
  //  cartegory: 'Mobile Development'
  //},
  //{
    //title:'Ecommerce Shopping Cart',
    //cartegory: 'Web Development'
  //},
  //    ]
  // }

  handleAddProject(project){
    let projects = this.state.projects;// state is immutable i.e it cannot be changed
    //but you can push/add more components to it.
    projects.push(project); //adds more components as new project
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)}/>
        <projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
