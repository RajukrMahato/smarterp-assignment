import React, { Component, Fragment } from 'react';
import "./addpost.css"
import firebase from "../firebase";

class addpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            description:"",
          };
          this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
        }
          handleChange= (e)=>{
              this.setState({[e.target.name]: e.target.value});
          };
          handleSubmit=(e)=>{
              e.preventDefault();
              console.log(this.state);
              let data=firebase.database().ref('data').orderByKey().limitToLast(100);
              firebase.database().ref('data').push({
                title:  this.state.title,
                description:this.state.description,
              })
              this.setState({
                title:"",
                 description:"",
              })
          }

    render() { 
        return (
          <Fragment>
            <div className="add">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Title</label><br/>        
                  <input type="text" 
                      name ="title" 
                      id="title"
                      placeholder="Enter a title"
                      onChange={this.handleChange}
                      value={this.state.title}
                      required
                  />
                <label htmlFor="blog">Description</label>
                    <textarea name="description" 
                      id="description" placeholder="Enter the details about the post" cols="50" rows="10"
                      onChange={this.handleChange}
                      value={this.state.description}>
                    </textarea>        
                    <button style={{background: "#00B4CC", height:"30px", width:"70px",  "border-radius":"5px"}} onClick={this.handleSubmit}>Publish</button>
              </form>
            </div>        
          </Fragment>

        );
    }
}

export default addpost;