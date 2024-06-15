const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Return a selectMenu'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel(`Option #1`)
                    .setValue(`https://www.linkedin.com/company/dbfl`),
                new StringSelectMenuOptionBuilder()
                    .setLabel(`Option #2`)
                    .setValue(`https://www.linkedin.com/company/dbfl`)
            );


        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    },
};