import React, { Component } from 'react';

class Counter extends Component {

    formateCount() {
        const { value } = this.props.value;
        return value == 0 ? <h1>Zero</h1> : value;
    }

    render() {


        return <div>
             {/* <h4>
                {this.props.value}
                </h4>  */}
            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.value.id)} className='btn btn-secondary btn-sm'>Incriment</button>
            <button onClick={() => this.props.onDelete(this.props.value.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            {/* {this.renderTags()} */}
        </div>;
    }

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.props.value.value === 0 ? "warning" : "primary";
        return classes;
    }

}

export default Counter;