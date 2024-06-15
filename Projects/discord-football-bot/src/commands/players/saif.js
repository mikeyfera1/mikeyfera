const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('saif')
        .setDescription('Player Statistics for saif Bin Hammad'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Saif Bin Hammad`)
        .setColor(0x7ed957)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220208629505069186/Saif_DBFL.png?ex=660e1ad7&is=65fba5d7&hm=2a32446a7ad99a00061f9bc2d261a0004de6b014d156ed3f64b331ce0075773f&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Green Bay Goblins'},
            {name: 'Position', value: 'WR'},
            {name: 'Touchdowns', value: '14 TDS'},
            {name: 'INTS (OFF)', value: '1(1) INTS'},
            {name: 'INTS (DEF)', value: '2 INTS'},
            {name: 'Rating', value: '**86** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};