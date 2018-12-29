const config = require("../config.json");

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

exports.run = async (client, msg, args) => {
    if(msg.author.id !== config.ownerID) return;
    
    if(args){
        var code = args.join(' ');
        try{
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = await require("util").inspect(evaled);
            
            if (evaled.length > 1950) {
                evaled = evaled.substr(0, 1950);
            }
            return  msg.channel.send(clean(evaled), {code:"xl"}).then(m => msg.delete());
        }
        catch(e) {
            return  msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(e)}\n\`\`\``).then(m => msg.delete());    
        }

        
    }

    return msg.reply('Debe proporcionar un codigo');
     
}