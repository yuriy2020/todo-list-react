import React from 'react';

export default class  extends React.Component {
    render(){
        return(
            <>
            <button onClick = {()=> this.props.addItem2('YYY')} type="button" className="btn btn-success">Add notes</button>
            </>
        )
    }
}