const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('week')
        .setDescription('This is a command to bring up the specific week of the DBFL season'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Current DBFL WEEK`)
        .setDescription('Week 1')
        .setColor(0xffffff)
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220100545336049674/Summer_Bowl_2.png?ex=660db62e&is=65fb412e&hm=6e9a5d04b277e56c4ccf0b50fdda6eaccfdb90d9722c1c7af91cf9bef36f85d5&')
        .setFooter({
            text: 'Make sure to be there for the preseason!!'
        })
        .addFields([
            {name: 'Game 1 (6:00pm EST)', value: 'Detroit Dragons Vs D.C Wizards'},
            {name: 'Game 2 (7:30pm EST)', value: 'Green Bay Goblins Vs Denver Knights'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};