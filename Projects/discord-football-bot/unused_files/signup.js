const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('signup')
        .setDescription('Allows Players to Sign Up for an Event'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
            .setCustomId(`sign-info`)
            .setTitle(`DBFL Registering`);

        const firstInput = new TextInputBuilder()
            .setCustomId("firstInput")
            .setLabel(`DBFL Combine (05/12 @5:00pm) **Yes/No**`)
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const secondInput = new TextInputBuilder()
            .setCustomId("secondInput")
            .setLabel(`DBFL Draft (05/13 @7:00pm) **Yes/No**`)
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const firstActionRow = new ActionRowBuilder().addComponents(firstInput);
        const secondActionRow = new ActionRowBuilder().addComponents(secondInput);
        modal.addComponents(firstActionRow, secondActionRow);

        await interaction.showModal(modal);
    }
};