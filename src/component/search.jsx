import React, { Component ,Fragment} from 'react';
import "./search.css";

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"",
         }
    }

    render() { 
        return (  
          <Fragment>
              <div>            
                  <div className="searchbody">
                      <div className="searchbar">
                          <input type="text" className="searchbox" placeholder="What are you looking for?" />
                          <button type="submit" className="searchButton">
                            <i className="fa fa-search" />Search
                          </button>
                      </div>
                  </div>          
              </div>
          </Fragment>
        );
    }
}

export default SearchComponent;