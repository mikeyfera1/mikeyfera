const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('aiden')
        .setDescription('Player Statistics for Aiden Shaffer'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Aiden Shaffer`)
        .setColor(0x0cc0df)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/752530922905010261/1222279872882409542/Aiden_DBFL.png?ex=6615a3d6&is=66032ed6&hm=7877a9c1267b57f19827fef5f9d317f2a4cf2d4cfc4d2d8816acd820eda4581f&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'D.C Wizards'},
            {name: 'Position', value: 'Wide Receiver/Tight End'},
            {name: 'Touchdowns', value: '15(12) TDS'},
            {name: 'INTS (OFF)', value: '3(3) INTS'},
            {name: 'INTS (DEF)', value: '2(1) INTS'},
            {name: 'Rating', value: '**88** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};