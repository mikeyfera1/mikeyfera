const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('dragons')
        .setDescription('Team Statistics for DBFL League'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Detroit Dragons`)
        .setColor(0xefefef)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220095303970197535/Detroit_Dragons.png?ex=660db14c&is=65fb3c4c&hm=a9b7d354e462799d4a6ed0ca2db45a9ff8542618b61a58ea1272c134f4dced1d&')
        .setFooter({
            text: 'Make sure to check out other team statistics!!!'
        })
        .addFields([
            {name: 'Ranking', value: '2nd'},
            {name: 'Roster', value: 'Alex Belli, Cole Jooste, Colin Liang, Scott Cheung, Allen Ho'},
            {name: 'Points', value: '168'},
            {name: 'Streak', value: 'L1'},
            {name: 'Rating', value: 'B+ Grade'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};