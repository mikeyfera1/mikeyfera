const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('scott')
        .setDescription('Player Statistics for Scott Cheung'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Scott Cheung`)
        .setColor(0xffffff)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        // .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220212529104683100/Colin_DBFL.png?ex=660e1e79&is=65fba979&hm=71e4c606b4c53a963c7f9fb8d7010a9359251ebd7578ac95c1f920476a9da526&p')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Detroit Dragons'},
            {name: 'Position', value: 'WR/TE'},
            {name: 'Touchdowns', value: '0 TDS'},
            {name: 'INTS (OFF)', value: '0 INTS'},
            {name: 'INTS (DEF)', value: '0 INTS'},
            {name: 'Rating', value: '**80** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};