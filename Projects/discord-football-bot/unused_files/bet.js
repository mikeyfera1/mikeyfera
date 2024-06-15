const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('bet')
        .setDescription('Allows Players to Make A Bet'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
            .setCustomId(`bet-info`)
            .setTitle(`DBFL Current Bets`);

        // const nameInput = new TextInputBuilder()
        //     .setCustomId("nameInfo")
        //     .setLabel(`What's Your Name?`)
        //     .setRequired(true)
        //     .setStyle(TextInputStyle.Short);

        const betInput = new TextInputBuilder()
            .setCustomId("betInfo")
            .setLabel(`Who Are You Betting On?`)
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const pointsInput = new TextInputBuilder()
            .setCustomId("pointsInfo")
            .setLabel(`How Much Are You Betting On?`)
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        // const nameActionRow = new ActionRowBuilder().addComponents(nameInput);
        const betActionRow = new ActionRowBuilder().addComponents(betInput);
        const pointsActionRow = new ActionRowBuilder().addComponents(pointsInput);
        modal.addComponents(betActionRow, pointsActionRow);

        await interaction.showModal(modal);
    }
};