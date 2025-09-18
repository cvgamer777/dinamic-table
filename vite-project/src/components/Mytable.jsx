import React from "react";
import './Mytable.css'

export default class Mytable extends React.Component {
    state = {
        style: {
            table: {
                border: '1px solid black',
                borderCollapse:'collapse'
            },
            td: {
                border: '1px solid black',
                borderCollapse:'collapse'
            }
           
        },
        rows: [

        ]
    }
    
    render () {
        return (
            <div>
                <table style={this.state.style.table}>
                    <tbody>
                        <tr>
                            <td style={this.state.style.td}>as {Json.stringify(this.state.rows)}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        )
    }
    componentDidMount() {
        const words = this.props.data.split(" ")
        console.log('words',words)
        this.setState({rows:words})
    }   
}