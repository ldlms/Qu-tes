const messsageText:string = "Hello Bob!"; // you should type on this line
const messageCreatedAt:Date = new Date(); // this one too

function stringifyMessage(text:string, createdAt:Date):string { // this one too
	return `${text}, the ${createdAt.toLocaleDateString()}`;
}

type Message = {
    from:string,
    message:string,
    isRead?:boolean
}
type Notif = {
    at:number,
    state:string,
}

const message1: Message = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2: Message = { from: "Alice", message: "Hi Bob!" };


const messages : Message[] = [message1, message2]; 
function readMessages(messages:Message[]) { 
	messages.map(mess => mess.isRead = true);
    return messages.length;
}
readMessages(messages);

const notification1: Notif = { at: 1694011133, state: "unread" };
const notification2: Notif = { at: 1694011532, state: "read" };

function readNotificationOrMessage(notificationOrMessage : Message|Notif) { // type this line
	if('state' in notificationOrMessage){
        notificationOrMessage.state = 'read';
    }else{
        notificationOrMessage.isRead = true;
    }
}

readNotificationOrMessage(notification1);
console.log(notification1);
readNotificationOrMessage(message2);
console.log(message2);

