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

    handleDelClick = function(rowIdx) {
        const oldRows = this.state.rows.slice()
        const newRows = [...oldRows]
        newRows.splice(rowIdx,1)
        this.setState({rows: [...newRows]})
    }
    
    render () {
        return (
            <div>
                <table style={this.state.style.table}>
                    <tbody>
                    {this.state.rows.map((word,wordIdx)=> <tr key={wordIdx}>
                        <td>
                            <button onClick={()=>this.handleDelClick(wordIdx)}>del row</button>
                        </td>
                        {[...word].map((char,charIdx)=>
                            <td style={this.state.style.td}>{char=='_'?' ': char}</td>
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