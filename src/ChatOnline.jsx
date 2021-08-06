import "./chatOnline.css"

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className= "chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className= "chatOnlineImg" src="https://i.redd.it/qa03fpfjhkf71.jpg" alt=""/>
                    <div className="chatOnlineBadge">  </div>

                </div>
                <span className="chatOnlineName"> John Doe  </span>
            </div>
        </div>
    )
}
