module.exports = {
    data: {
        name: `sheet-s`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `https://docs.google.com/spreadsheets/d/1xREw4GOWNdrfecTE13t4uWIstXvR5WdhGiwK1PjLWXE/edit?usp=sharing`
        })
    }
}