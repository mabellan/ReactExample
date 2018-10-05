import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }


    render(){
        return (
            <div>
                <input 
                    value = {this.state.term}
                    onChange={event => this.onTextChanges(event.target.value)}
                />
            </div>
        );



    }
    onTextChanges(term){
        this.setState({term});
        this.props.onTextChange(term);
    }


}

export default SearchBar;