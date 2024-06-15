const axios = require('axios');
module.exports = {
    data: {
        name: `bet-info`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `Bets will not open until May 15, 2024!!!`, ephemeral: false
        });

        //`You are betting on **${interaction.fields.getTextInputValue("betInfo")}** \n With **${interaction.fields.getTextInputValue("pointsInfo")}** points`, ephemeral: true


        // const name = interaction.user.tag;
        // const bet = interaction.fields.getTextInputValue("betInfo");
        // const points = interaction.fields.getTextInputValue("pointsInfo");

        // axios.post('https://sheetdb.io/api/v1/av83tjb5ify8v', {
        //     data: {
        //         Name: `${name}`,
        //         Bet: `${bet}`,
        //         Points: `${points}`,
        //     }
        // });
    }
}