const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('alex')
        .setDescription('Player Statistics for Alex Belli'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Alex Belli`)
        .setColor(0xffffff)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220171765788184687/Alex_DBFL.png?ex=660df882&is=65fb8382&hm=b08fd11afd12ea600bbbec4042e68e8cfcde6cac3ed62c9c0d8c478b2e4c9bdf&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Detroit Dragons'},
            {name: 'Position', value: 'Quarterback/ Wide Receiver'},
            {name: 'Touchdowns', value: '59(14) TDS'},
            {name: 'INTS (OFF)', value: '13(2) INTS'},
            {name: 'INTS (DEF)', value: '13(5) INTS'},
            {name: 'Rating', value: '**92** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};