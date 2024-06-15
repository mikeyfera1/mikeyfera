const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('news')
        .setDescription('Returns current news for the DBFL'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`DBFL News`)
        .setDescription('Current News in the DBFL')
        .setColor(0xffffff)
        .setImage('https://cdn.discordapp.com/attachments/752530922905010261/963125294888271922/DBFL_Logo_2.png')
        .setFooter({
            text: 'Make sure to check the news every week!!'
        })
        .addFields([
            {name: 'Preseason Active!!!', value: 'The DBFL Preseaosn is active!!! Start getting prepared!!'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};