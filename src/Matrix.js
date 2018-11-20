import React, {Component} from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

    constructor() {
        super()
    }

    state = {
        selectedColor: ''
    };


    genRow = (vals) => (
        vals.map((val, idx) => <Cell getColor={this.getColor} key={idx} color={val}/>)
    );

    genMatrix = () => (
        this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
    );

    selectColorHandler = (selectedColor) => {
        this.setState({
            selectedColor
        })
    };

    getColor = () => this.state.selectedColor;

    render() {
        return (
            <div id="app">
                <ColorSelector selectColorHandler={this.selectColorHandler}/>
                <div id="matrix">
                    {this.genMatrix()}
                </div>
            </div>
        )
    }

}

Matrix.defaultProps = {
    values: chromeBoi
}
