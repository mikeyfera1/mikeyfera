const axios = require('axios');
module.exports = {
    data: {
        name: `sign-info`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `Thank you for filling out Registration!!`, ephemeral: false
        });

        const user = interaction.user.tag;
        const combine = interaction.fields.getTextInputValue("firstInput");
        const draft = interaction.fields.getTextInputValue("secondInput");

        axios.post('https://sheetdb.io/api/v1/av83tjb5ify8v', {
            data: {
                Name: `${user}`,
                Combine: `${combine}`,
                Draft: `${draft}`,
            }
        });
    }
}