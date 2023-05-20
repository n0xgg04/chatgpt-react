import React from 'react'
import SideBar from '../../components/sidebar'
import ChatForm from '../../components/chatform'
import './style.css'
class ChatPage extends React.Component {
  render() {
    return (
      <>
          <section className="chatgpt">
              <div className="container">
                <SideBar/>
                <ChatForm/>
              </div>
          </section>
      </>
    )
  }
}

export default ChatPage