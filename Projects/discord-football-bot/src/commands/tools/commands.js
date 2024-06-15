const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription('Returns a list of commands for the DBFL Bot'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Commands`)
        .setDescription('Current Commands for the DBFL Bot')
        .setColor(0xffffff)
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220804984262627338/DBFL_ALERT_4.png?ex=6610463d&is=65fdd13d&hm=50f86b72b4e0c548bb7709758d272b4227d72e34dfb04d0716f22c8b4856dbca&')
        .setFooter({
            text: 'Copyright @ DBFL Bot 2024'
        })
        .addFields([
            {name: 'commands', value: 'Current DBFL Commands'},
            {name: 'teams', value: 'Current DBFL Teams'},
            {name: 'team name', value: 'Specific Team Stats'},
            {name: 'player\'s first name', value: 'Individual Stats'},
            {name: 'roster', value: 'Current DBFL Roster'},
            {name: 'week', value: 'Current DBFL Week'},
            {name: 'bets', value: 'Current DBFL Bets'},
            {name: 'bet', value: 'Place DBFL Bets'},
            {name: 'points', value: 'DBFL BEt Leaderboard'},
            {name: 'odds', value: 'Current DBFL Odds'},
            {name: 'predict', value: 'Current DBFL Predictions'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};