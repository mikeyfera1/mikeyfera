const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('yousef')
        .setDescription('Player Statistics for Yousef Bin Hammad'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Yousef Bin Hammad`)
        .setColor(0x0cc0df)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220212529486368860/Yousef_DBFL.png?ex=660e1e79&is=65fba979&hm=9b041e627615db0cce62bc4e0060c2a5d6da9c524dccb7c3ce3d5f8984fa3ae6&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'D.C Wizards'},
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