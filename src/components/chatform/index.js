import React from 'react'
import './style.css'
import History from '../../components/history/';

class ChatForm extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            messages: [],
            typing : "",
            isWaitingForGPT : false,
        }
    }



    handUserType = (e) => {
        this.setState({
            ...this.state,
            typing: e.target.value
        })
    }

    askGPT() {
        this.setState({
            ...this.state,
            isWaitingForGPT : true
        })
        fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            body: JSON.stringify({
                "prompt" : this.state.typing,
                "temperature" : 1,
                "max_tokens" : 1000,
                "top_p" : 1,
                "frequency_penalty" : 0.0,
                "presence_penalty" : 0.0
            })
        }).then(response => response.json())
            .then(async(data) => {
                console.log(data)
                await this.setState({
                    ...this.state,
                    messages: [...this.state.messages, {name: "GPT", message: data.choices[0].text}],
                    typing: ""
                })
                this.setState({
                    ...this.state,
                    isWaitingForGPT : false
                })
            }).catch((error) => {
            console.error('Error:', error);
        });
    }

    sendQuestion = async() => {
        await this.setState({
            ...this.state,
            messages: [...this.state.messages, {name: "You", message: this.state.typing, status : "loaded"}],
        })
        this.askGPT()
        //console.log("Asked! " + this.state.typing + this.state.messages)
    }

    componentDidMount(){
        console.log("Mounted chatform!")
    }

    componentDidUpdate(){
        console.log("Updated chatform!")
    }

    render(){
        return (
            <div className="chatgpt">
                <div className="chatgpt-history">
                    <History messages={this.state.messages}/>
                    {
                        this.state.isWaitingForGPT && <span style={{
                            fontSize: "0.8em",
                            marginLeft : "10px"
                        }}>Waiting for GPT...</span>
                    }
                </div>
                <div className="chatgpt-userAsk">
                    <div className="chatgpt-userAsk__input">
                        <input type="text" placeholder="Type your message here..." onChange={this.handUserType} value={this.state.typing}/>
                        <button onClick={this.sendQuestion}>Send</button>
                    </div>
                    <div className="chatgpt-userAsk__warn">
                        <span>Warning: This is a demo chatbot. Please do not enter any sensitive information.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatForm