const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('louie')
        .setDescription('Player Statistics for Louie Liberatore'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Louie Liberatore`)
        .setColor(0xada16f)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220171766861795348/Louie_DBFL.png?ex=660df882&is=65fb8382&hm=96b5353990a7387fcf4f41812427066a2f4e858365ac0fdd24ac00ba5c9fbfe8&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Denver Knights'},
            {name: 'Position', value: 'QB/WR'},
            {name: 'Touchdowns', value: '38(7) TDS'},
            {name: 'INTS (OFF)', value: '5(3) INTS'},
            {name: 'INTS (DEF)', value: '6(1) INTS'},
            {name: 'Rating', value: '**90** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};