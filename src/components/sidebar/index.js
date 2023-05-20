import React from 'react'
import ChatForm from "../chatform";
import './style.css'
import chatIcon from './images/chat.svg'

class SideBar extends React.Component{
    render(){
        return (
            <>
                <div className="slidebar">
                    <div className="slidebar-container">
                        <div className="slidebar_button">
                            <button className="slidebar_button_item">
                                New chat
                            </button>
                        </div>
                        <div className="slidebar_history">
                            <div className="slidebar_history-head">
                                <span>Today</span>
                            </div>
                            <div className="slidebar_history-body">
                                <ul className="slidebar_history-body__list">
                                    {/*<li className="slidebar_history-body__list-item">*/}
                                    {/*   <img src={chatIcon} alt="chat"/>*/}
                                    {/*    How to use React?*/}
                                    {/*</li>*/}
                                    {/*<li className="slidebar_history-body__list-item">*/}
                                    {/*    <img src={chatIcon} alt="chat"/>*/}
                                    {/*    What's Redux?*/}
                                    {/*</li>*/}
                                    {/*<li className="slidebar_history-body__list-item">*/}
                                    {/*    <img src={chatIcon} alt="chat"/>*/}
                                    {/*    Vai ca dai*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SideBar