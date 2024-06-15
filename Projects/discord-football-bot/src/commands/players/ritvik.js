const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ritvik')
        .setDescription('Player Statistics for Ritvik Shah'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Ritvik Shah`)
        .setColor(0x7ed957)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220171767251996672/Ritvik_DBFL.png?ex=660df883&is=65fb8383&hm=d143fcae71713c9a7a405445370672cc9c05148c98012c5397ddc98bfcc90a67&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Green Bay Goblins'},
            {name: 'Position', value: 'QB/WR'},
            {name: 'Touchdowns', value: '35(16) TDS'},
            {name: 'INTS (OFF)', value: '6(2) INTS'},
            {name: 'INTS (DEF)', value: '3(1) INTS'},
            {name: 'Rating', value: '**92** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};