import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
    state = { 
        CountersItem: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
     } 
     onDelete = (id) => {
         const countersvalue = this.state.CountersItem.filter( (value) => value.id !== id   )
         this.setState({ CountersItem :countersvalue});
     }
     onIncrement = (id) => {
        // console.log("on increment -->  id  -> ", id);
        
        const indexToUpdate = this.state.CountersItem.findIndex(item => item.id === id);

    //    const state =   this.state.CountersItem[indexToUpdate].value++;


        const counters = [...this.state.CountersItem]; 
        console.log("on increment -->  counters  -> ", this.state.CountersItem[indexToUpdate].value++);

        const index = counters.indexOf(indexToUpdate); 

        console.log("on increment -->  ...counters  -> ", this.state.CountersItem);

        counters[index] = {...counters}; 

        // console.log("on increment -->  index  -> ", index);
        
        counters[index].value ++; 
        // console.log("on increment -->  ounters[index].value  -> ",counters[index].value);
        this.setState({counters})
    
     }

     totalCount(params) {
        
        let totalValue = 0;

        for (const item of this.state.CountersItem) {
            totalValue += item.value;
        }

        return  totalValue;
     }


    render() { 
        
        return (
        <div>
            <h1>Nav bar {this.totalCount()}</h1>
            {this.state.CountersItem.map(counter => 
            <Counter  
            key={counter.id} 
            value={counter} 
            onDelete={(id) => this.onDelete(id)} 
            onIncrement={(id) => this.onIncrement(id) }>
            <h4>{counter.id}</h4>

            </Counter>   
           )}

            </div>
        );
    }
}
 
export default Counters;