import "./message.css"

export default function Message({own}) {
    return (
        <div className = {own ? "message own" : "message"}>
                <div className="messageTop">
                    <img className = "messageImg" src="https://i.redd.it/qa03fpfjhkf71.jpg" alt=""/>
                    <p className="messageText"> Hello there! How you doing?
                    </p>
                </div>

                <div className="messageBottom"> 
                    15 mins ago
                </div>
        </div>
    );
}