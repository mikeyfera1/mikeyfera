const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('michael')
        .setDescription('Player Statistics for Michael Barsotti'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Michael Barsotti`)
        .setColor(0xada16f)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/752530922905010261/1220875839676092499/Michael_DBFL.png?ex=6610883a&is=65fe133a&hm=f41d0570fddd13bcdf169d276cb1b0a4b451e895746176c37ba1bfae6f48ed28&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Denver Knights'},
            {name: 'Position', value: 'WR'},
            {name: 'Touchdowns', value: '7 TDS'},
            {name: 'INTS (OFF)', value: '0 INTS'},
            {name: 'INTS (DEF)', value: '2 INTS'},
            {name: 'Rating', value: '**83** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};