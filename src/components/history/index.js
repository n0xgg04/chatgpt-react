import React from 'react';
import './style.css';
import {isEqual} from 'lodash'
import ChatHistoryElement from "../chathistory_list";

class History extends React.Component {
    componentDidMount(){
        console.log("History mounted")
    }

    componentDidUpdate(){
        console.log("History updated")
    }

    shouldComponentUpdate(nextProps, nextState){
        return !isEqual(this.props, nextProps)
    }
    render() {
        return (
            <>
                {
                    this.props.messages.map((message, index) =>
                        <ChatHistoryElement key={index} mid={index} message={message}/>
                    )
                }
            </>
        );
    }
}

export default History;
