import React, {Component} from 'react';
import List from './ResultsViews/List';
import Grid from './ResultsViews/Grid';

export default class ResultsPage extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className='ResultsPage'>
                <List />
                <Grid />
            </div>
        );
    }	
}


