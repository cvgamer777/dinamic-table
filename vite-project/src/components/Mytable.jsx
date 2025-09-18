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
           
        }
    }
    
    render () {
        return (
            <div>
                <table style={this.state.style.table}>
                    <tbody>
                        <tr>
                            <td style={this.state.style.td}>as</td>
                            <td style={this.state.style.td}>asd</td>
                            <td style={this.state.style.td}>asd</td>
                            <td style={this.state.style.td}>asd</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        )
    }
}