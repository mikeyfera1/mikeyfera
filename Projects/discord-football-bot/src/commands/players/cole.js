const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('cole')
        .setDescription('Player Statistics for Cole Jooste'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Cole Jooste`)
        .setColor(0xffffff)
        .setThumbnail('https://cdn.discordapp.com/attachments/1220085546190110900/1220095524473016390/Ratings_B.png?ex=660db181&is=65fb3c81&hm=ec641d3a360a5a050a597ab0da1bcb72b3e321f380caf26e0deff8410a9bbfe2&')
        .setImage('https://cdn.discordapp.com/attachments/753687727312076841/1240699730078466078/Cole_DBFL.png?ex=6647832a&is=664631aa&hm=92a3c50c76d32d4dba6bf5b8165cdcc006860aaac85b4cecaf13997f57869806&')
        .setFooter({
            text: 'Make sure to check out other player statistics!!!'
        })
        .addFields([
            {name: 'Team', value: 'Detroit Dragons'},
            {name: 'Position', value: 'WR'},
            {name: 'Touchdowns', value: '11(11) TDS'},
            {name: 'INTS (OFF)', value: '3(3) INTS'},
            {name: 'INTS (DEF)', value: '1 INTS'},
            {name: 'Rating', value: '**90** OVR'}
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};