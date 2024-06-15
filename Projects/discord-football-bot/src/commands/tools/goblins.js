const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('goblins')
        .setDescription('Team Statistics for DBFL League'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Green Bay Goblins`)
        .setColor(0x85d859)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220095304553070745/Green_Bay_Goblins.png?ex=660db14c&is=65fb3c4c&hm=eb8e8efaa9e60ce98a9fbe1623fade3679ffb59cba341909d6760f9ab0ca4079&')
        .setFooter({
            text: 'Make sure to check out other team statistics!!!'
        })
        .addFields([
            {name: 'Ranking', value: '4th'},
            {name: 'Roster', value: 'Ritvik Shah, Saif Bin Hammad, John Hertzog, Arun Vasudevan, Gabe Pacella'},
            {name: 'Points', value: '70'},
            {name: 'Streak', value: 'L2'},
            {name: 'Rating', value: 'B+ Grade'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};