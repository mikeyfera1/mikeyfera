const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('knights')
        .setDescription('Team Statistics for DBFL League'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Devner Knights`)
        .setColor(0xafa072)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220095303689048205/Denver_Knights.png?ex=660db14c&is=65fb3c4c&hm=48be78d22ac24eb1eae0663564296381eef767de089bd005cd2276281a7264f7&')
        .setFooter({
            text: 'Make sure to check out other team statistics!!!'
        })
        .addFields([
            {name: 'Ranking', value: '3rd'},
            {name: 'Roster', value: 'Louie Liberatore, Franco Liberatore, Ben Bordenstein, Michael Barsotti, Liam Holleran'},
            {name: 'Points', value: '91'},
            {name: 'Streak', value: 'L2'},
            {name: 'Rating', value: 'B+ Grade'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};