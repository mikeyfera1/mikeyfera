const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('john')
        .setDescription('Player Statistics for John Hertzog'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`John Hertzog`)
        .setColor(0x7ed957)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/752530922905010261/1220875839302795344/John_DBFL.png?ex=6610883a&is=65fe133a&hm=4cf42afa402bb2dc9badf4d167241bd65ee232dbb11a3f404aecab9c52e10c17&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Green Bay Goblins'},
            {name: 'Position', value: 'WR/QB'},
            {name: 'Touchdowns', value: '34(3) TDS'},
            {name: 'INTS (OFF)', value: '7(3) INTS'},
            {name: 'INTS (DEF)', value: '2(2) INTS'},
            {name: 'Rating', value: '**85** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};