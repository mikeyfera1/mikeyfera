const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('bear')
        .setDescription('Player Statistics for Bear Bottonari'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Bear Bottonari`)
        .setColor(0x0cc0df)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/753687727312076841/1245807349344505937/Bear_DBFL.png?ex=665a1802&is=6658c682&hm=587c211c72b5918770c6df1c80643711aec2951ab60516ff9a08701387b66e29&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'D.C Wizards'},
            {name: 'Position', value: 'WR'},
            {name: 'Touchdowns', value: '55(26) TDS'},
            {name: 'INTS (OFF)', value: '1(1) INTS'},
            {name: 'INTS (DEF)', value: '22(12) INTS'},
            {name: 'Rating', value: '**93** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};