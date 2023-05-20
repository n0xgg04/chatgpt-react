import React, {useEffect} from 'react';

function ChatHistoryElement(props){
    const {name, message} = props.message
    const {mid} = props
    useEffect(() => {
        console.log("History element mounted with id = " + mid)

        return () => {
            console.log("History element unmounted with id = " + mid)
        }
    }, [mid])

    console.log("History element rendered with id = " + mid)
    return (
        <div className="chatgpt-history__item" key={mid}>
            <div className="chatgpt-history__item-avatar">
            </div>
            <div className="chatgpt-history__item-content">
                <div className="chatgpt-history__item-content__name">
                    {name}
                </div>
                <div className="chatgpt-history__item-content__message">
                    {message}
                </div>
            </div>
        </div>
    )
 }

 export default React.memo(ChatHistoryElement);

// export default class ChatHistoryElement extends React.Component{
//
//     componentDidMount(){
//         console.log("History element mounted with id = " + this.props.mid)
//     }
//
//     componentDidUpdate(){
//         console.log("History element updated with id = " + this.props.mid)
//     }
//
//     shouldComponentUpdate(nextProps, nextState){
//         return nextProps.mid !== this.props.mid
//     }
//
//     render(){
//         return (
//             <div className="chatgpt-history__item" key={this.props.mid}>
//                 <div className="chatgpt-history__item-avatar">
//                 </div>
//                 <div className="chatgpt-history__item-content">
//                     <div className="chatgpt-history__item-content__name">
//                         {this.props.message.name}
//                     </div>
//                     <div className="chatgpt-history__item-content__message">
//                         {this.props.message.message}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }