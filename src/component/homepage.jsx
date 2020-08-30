import React, { Component,Fragment } from 'react';
import "./homepage.css";
import SearchComponent from "./search";
import Add from "./addpost";
import Display from "./displaypost";

class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    return (
        <Fragment>
            <section id="blog">
                <div className="head-0">
                    <div className="head-1"> 
                        <h1></h1>
                    </div>
                    <div className="search">
                        <SearchComponent />
                    </div>
                    <div className="addButton">
                        <button className="new">New post</button> 
                        <button className="post">Published</button>
                    </div>
                </div>
                <div className="mainbody">
                    <Add/>
                    <Display />
                </div>            
            </section>
        </Fragment>
      );
    }
}
 
export default homepage;