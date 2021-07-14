
import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    };

    increase = () => {

        this.setState({ age: this.state.age + 1 });

    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h2>{firstName} , {lastName}</h2>
                <p>age : {this.state.age}</p>
                <p>hair color : {hairColor}</p>
                <button onClick={this.increase}>birthday {firstName}{lastName}</button>




            </div>
        );
    }
}
export default PersonCard;