const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('points')
        .setDescription('Returns a list of commands for the DBFL Bot'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`DBFL Betting Leaderboard`)
        .setColor(0x5de0e6)
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1221484093078900746/DBFL_ALERT_9.png?ex=6612beb5&is=660049b5&hm=d287321737ee68eff363fc99a7878fdf1348b3a3e01cde67b432a0c41ada1a05&')
        .setFooter({
            text: 'Bet weekly for a chance to win!!!'
        })
        .addFields([
            {name: '1.) Mikey Fera', value: '25 points'},
            {name: '2.) Alex Belli', value: '25 points'},
            {name: '3.) Louie Liberatore', value: '25 points'},
            {name: '4.) John Hertzog', value: '25 points'},
            {name: '5.) Fracno Liberatore', value: '25 points'},
            {name: '6.) Ritvik Shah', value: '25 points'},
            {name: '7.) Saif Bin Hammad', value: '25 points'},
            {name: '8.) Michael Barsotti', value: '25 points'},
            {name: '9.) Liam Holleran', value: '25 points'},
            {name: '10.) Ben Bordenstein', value: '25 points'},
            {name: '11.) Adam Spotts', value: '25 points'},
            {name: '12.) Yousef Bin Hammad', value: '25 points'},
            {name: '13.) Colin Liang', value: '25 points'},
            {name: '14.) Burhaan waheed', value: '25 points'},
            {name: '15.) Hasan Baddaruddin', value: '25 points'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};