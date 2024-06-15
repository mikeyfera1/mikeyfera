const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ben')
        .setDescription('Player Statistics for Ben Bordenstein'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Ben Bordenstein`)
        .setColor(0xada16f)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/1220085502334472314/1220216212991115293/Ben_DBFL.png?ex=660e21e7&is=65fbace7&hm=dd22a3dc5d11701a47fc46fcaecaac3315817edba31eda65c619b146c9daf06b&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Denver Knights'},
            {name: 'Position', value: 'WR'},
            {name: 'Touchdowns', value: '8(8) TDS'},
            {name: 'INTS (OFF)', value: '1(1) INTS'},
            {name: 'INTS (DEF)', value: '0 INTS'},
            {name: 'Rating', value: '**80** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};