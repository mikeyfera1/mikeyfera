const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('bets')
        .setDescription('Returns a list of commands for the DBFL Bot'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`DBFL Current Bets`)
        .setColor(0xff3131)
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220101386012987503/DBFL_ALERT_1.png?ex=660db6f6&is=65fb41f6&hm=5a8298231a3b6b32b84888ca6bd108843059cac0891dff8bd692ce7ef43da8fe&')
        .setFooter({
            text: 'Make sure to check which bets are going on every week!!!'
        })
        .addFields([
            {name: 'No Bets Currently', value: 'Check Back When The New Season Starts'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};