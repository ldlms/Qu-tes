"use strict";
const messsageText = "Hello Bob!"; // you should type on this line
const messageCreatedAt = new Date(); // this one too
function stringifyMessage(text, createdAt) {
    return `${text}, the ${createdAt.toLocaleDateString()}`;
}
const message1 = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2 = { from: "Alice", message: "Hi Bob!" };
const messages = [message1, message2];
function readMessages(messages) {
    messages.map(mess => mess.isRead = true);
    return messages.length;
}
readMessages(messages);
const notification1 = { at: 1694011133, state: "unread" };
const notification2 = { at: 1694011532, state: "read" };
function readNotificationOrMessage(notificationOrMessage) {
    if ('state' in notificationOrMessage) {
        notificationOrMessage.state = 'read';
    }
    else {
        notificationOrMessage.isRead = true;
    }
}
readNotificationOrMessage(notification1);
console.log(notification1);
readNotificationOrMessage(message2);
console.log(message2);
