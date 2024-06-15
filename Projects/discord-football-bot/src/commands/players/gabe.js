const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('gabe')
        .setDescription('Player Statistics for Gabe Pacella'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Gabe Pacella`)
        .setColor(0x7ed957)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/1220085502334472314/1220420848733917337/Gabe_DBFL.png?ex=660ee07c&is=65fc6b7c&hm=dba0434ab1e16c30e64c02c7ce6c8a6fcfa9eeec1169b759a2f716d2ad6db059&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Green Bay Goblins'},
            {name: 'Position', value: 'WR'},
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