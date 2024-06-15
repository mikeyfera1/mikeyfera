const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('franco')
        .setDescription('Player Statistics for Franco Liberatore'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Franco Liberatore`)
        .setColor(0xada16f)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524103782420/Ratings_A.png?ex=660db181&is=65fb3c81&hm=3da515fddf26af709250f68ae192a4dac82e1c50d6a44cffaa49c3870763ccf0&')
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220171766328983653/Franco_DBFL.png?ex=660df882&is=65fb8382&hm=3ea7ec4f1814534bde68478076d55db6bf12eb5e49f37606ec356d074ba97658&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Denver Knights'},
            {name: 'Position', value: 'WR'},
            {name: 'Touchdowns', value: '22(7) TDS'},
            {name: 'INTS (OFF)', value: '2(2) INTS'},
            {name: 'INTS (DEF)', value: '3(1) INTS'},
            {name: 'Rating', value: '**91** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};