const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('roehl')
        .setDescription('Player Statistics for Roehl Bennedicto'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Roehl Bennedicto`)
        .setColor(0xd4af37)
        .setThumbnail('https://cdn.discordapp.com/attachments/753687727312076841/1220211647461986374/Ratings_HoF.png?ex=660e1da7&is=65fba8a7&hm=f68fa2bd3ab0e75640b5a4d79781e3374b5f6231fa42b1f2c7e1015c5aaa59a3&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220210432795742268/Roehl_DBFL.png?ex=660e1c85&is=65fba785&hm=4a1094ae06f155725cda54c4f7ae917f189db4bdb2654ec56b44e1c175361d54&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'DBFL Hall of Fame', value: 'DHoF 2023 Inductee'},
            {name: 'Position', value: 'WR'},
            {name: 'Career Touchdowns', value: '4 TDS'},
            {name: 'Career INTS (OFF)', value: '4 INTS'},
            {name: 'Career INTS (DEF)', value: '2 INTS'},
            {name: 'Career Rating', value: '**85** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};