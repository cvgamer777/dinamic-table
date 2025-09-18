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
                borderCollapse:'collapse',
                width: '40px',
                height: '80px'
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
                    {this.state.rows.map((word,wordIdx)=> <tr key={wordIdx}>
                        {[...word].map((char,charIdx)=>
                            <td style={this.state.style.td}>{char}</td>
                        )}
                    </tr>)}
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