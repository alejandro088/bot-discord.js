const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "!";

client.on("ready", () => {
   console.log("En linea y conectado!");
});

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.content.startsWith(prefix + "¿Estas funcionando?")) {
    message.channel.send("Sí, estoy en línea y a tus órdenes");
  }


    if(command == `consuelo`) {
        var respuestas = ["Ella no te ama", "No es caballo, no es jinete... Es tu corazón que usa como juguete :'v", "Olvidala", "No es Trump, no es Obama, es tu crush... que no te ama :'v ", ]
    var random = Math.floor(Math.random() * respuestas.length);
    message.channel.send(respuestas[random])
    }

    switch (command){
    case "infobot":
        const embed = new Discord.RichEmbed()
        .setTitle("Creador del bot: Josue Multivideos")
        .setAuthor("MultiBot", client.user.avatarURL)
        .setColor(0x00AE86)
        .setDescription("Hola, soy un bot creado por Josue Multivideos para satisfacer varias necesidades, por el momento estoy en programación, pero pronto haré muchisimas funciones divertidas.")
        .setFooter(`Respondí este mensaje a ${message.author.tag}`, message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .setURL("https://www.youtube.com/josuemultivideos")

        message.channel.send({embed});
        break;
    }



    if (command == `expulsar`) {
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    var perms = message.member.hasPermission("KICK_MEMBERS");
    if(!perms) return message.channel.send("No estás autorizado para utilizar este comando");
    if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');

    message.guild.member(mencionado).kick(razon);
    const embed = new Discord.RichEmbed()
    .setTitle("Hey, has sido expulsado del servidor")
    .setAuthor("MultiBot", client.user.avatarURL)
    .setColor(0x00AE86)
    .setDescription(`**${mencionado.username}**, fue expulsado por ${razon}.`)
    .setFooter(`Expulsión solicitada por ${message.author.tag}`, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL()
    message.channel.send({embed});
    }

    if (command == `advertir`) {
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    var perms = message.member.hasPermission("WARN_MEMBERS");
    if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');

    message.guild.member(mencionado).console.warn();(razon);
    const embed = new Discord.RichEmbed()
    .setTitle("Hey, ya tienes un strike")
    .setAuthor("MultiBot", client.user.avatarURL)
    .setColor(0x00AE86)
    .setDescription(`Hey **${mencionado.username}**, tienes un strike por ${razon}.`)
    .setFooter(`Strike solicitado por ${message.author.tag}`, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL()
    message.channel.send({embed});
    }

    if (command == `banear`) {
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    var perms = message.member.hasPermission("BAN_MEMBERS");
    if(!perms) return message.channel.send("No estás autorizado para utilizar este comando");
    if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');

    message.guild.member(mencionado).ban
    const embed = new Discord.RichEmbed()
    .setTitle("Adiós para siempre")
    .setAuthor("MultiBot", client.user.avatarURL)
    .setColor(0x00AE86)
    .setDescription(`**${mencionado.username}**, lo siento, has sido baneado por ${razon} y ya no hay proximas oportunidades, lo siento mucho.`)
    .setFooter(`Baneo solicitado por ${message.author.tag}`, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL()
    message.channel.send({embed});
    }

    if (command == `estadisticas`) {
    var server = message.guild;

    const embed = new Discord.RichEmbed()
        .setTitle("Estadísticas del servidor")
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)
        .addField('ID', server.id, true)
        .addField('Region', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
        .addField('Miembros', server.memberCount, true)
        .addField('Bots', server.memberCount, true)
        .addField('Roles', server.roles.size, true)
        .setColor(0x66b3ff)
    message.channel.send({ embed });
    }

    if (command == `Estadisticas`) {
    var server = message.guild;

    const embed = new Discord.RichEmbed()
        .setTitle("Estadísticas del servidor")
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)
        .addField('ID', server.id, true)
        .addField('Region', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
        .addField('Miembros', server.memberCount, true)
        .addField('Bots', server.memberCount, true)
        .addField('Roles', server.roles.size, true)
        .setColor(0x66b3ff)
    message.channel.send({ embed });
    }

    if (command == "?") {
    const embed = new Discord.RichEmbed()
        .setTitle("Todos los comandos disponibles")
        .setThumbnail(server.iconURL)
        .setAuthor(server.name, server.iconURL)
        .setColor(0x00AE86)
        .setFooter(`Respondí este mensaje a ${message.author.tag}`, message.author.avatarURL)
        .addField('mb/consuelo: Te dará consuelo en los momentos mas difíciles con tu pareja, asegurado :v')
        .addBlankField(true)
        .addField('mb/play (Url de la canción): Para poner música en el servidor. (Próximamente)')
        .addBlankField(true)
        .addField('mb/infobot: Información del bot, quién lo creó y sus redes sociales')
        .addBlankField(true)
        .addField('mb/estadisticas: Muestra las estadísticas del server')
        .addBlankField(true)
        .addField('mb/Trabajar: Reclamar créditos cada cierto tiempo (Próximamente)')
        .addBlankField(true)
        .addField('mb/balance: Muestra cuántos créditos tienes')
        .addBlankField(true)
        .addField('mb/shop: Muestra los objetos en la tienda y los que puedes comprar')
        .addBlankField(true)
        .addField('Y muchos comandos más... por el momento el bot sigue en programación')
        message.channel.send({ embed });

    }
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.get("523399492008149002")
  if (!channel) return;
  channel.send(`${member} se ha unido al server, démosle la bienvenida con un fuerte abrazo virtual`);
});

client.on('guildMemberRemove', member => {
  const channel = client.channels.get("523399492008149002")
  if (!channel) return;
  channel.send(`${member} se ha ido del server, adiós vaquero :'v`);

});


client.login('MzYwODY4MDU3MDQxNjAwNTEy.DlD7JQ.IdATJsrcmtNIvMte4Pqm_r-J-_c');