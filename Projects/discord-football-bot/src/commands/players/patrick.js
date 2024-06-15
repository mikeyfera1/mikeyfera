const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('patrick')
        .setDescription('Player Statistics for Patrick Hynds'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Patrick Hynds`)
        .setColor(0xffffff)
        // .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        // .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220171767662772254/Adam_DBFL.png?ex=660df883&is=65fb8383&hm=2b89ba4b2e5e1bb2ef040a4cdda05719b4121dddeae0587092fd859f5b27b6ff&')
        // .setFooter({
        //     text: 'Make sure to check out other player statistics!!!'
        // })
        .addFields([
            {name: 'Currently Inactive', value: 'No Stats To See'},
            // {name: 'Position', value: 'NA'},
            // {name: 'Touchdowns', value: '0 TDS'},
            // {name: 'INTS (OFF)', value: '0 INTS'},
            // {name: 'INTS (DEF)', value: '0 INTS'},
            // {name: 'Rating', value: '**NA** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};