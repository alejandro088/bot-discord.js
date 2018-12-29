exports.run = (client, message, args) => {

    if (user) {

        if (user.lastMessage) {
            console.log("Contenido del mensaje");
            console.log(user.lastMessage.content);
            message.reply(`${user} ha escrito ${user.lastMessage.content} el dia ${user.lastMessage.createdAt}`);
        } else {
            message.reply(`${user} no ha escrito ningun mensaje.`);
        }
        return message.delete();
    }

}