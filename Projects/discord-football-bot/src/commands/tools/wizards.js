const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('wizards')
        .setDescription('Team Statistics for DBFL League'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`D.C Wizards`)
        .setColor(0x0bc1df)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220095303445774396/DC_Wizards.png?ex=660db14c&is=65fb3c4c&hm=8d938fbf8d9b3627399486b64b57de35aa5084142f7ee121aa5492958b3c72cb&')
        .setFooter({
            text: 'Make sure to check out other team statistics!!!'
        })
        .addFields([
            {name: 'Ranking', value: '1st'},
            {name: 'Roster', value: 'Mikey Fera, Bear Bottonari, Aiden Shaffer, Burhaan Waheed, Yousef Bin Hammad'},
            {name: 'Points', value: '280'},
            {name: 'Streak', value: 'W5'},
            {name: 'Rating', value: 'B+ Grade'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};