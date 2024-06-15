const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('sheets')
        .setDescription('Returns a Button for DBFL\'s Data Sheet'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
        .setCustomId('sheet-s')
        .setLabel(`DBFL's Summer League Data Sheet`)
        .setStyle(ButtonStyle.Primary);


        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }
}