const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaders')
        .setDescription('This is a command for the current stat leaders in the league'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`DBFL Stats Leaders`)
        .setDescription('Updated (Week 5)')
        .setColor(0xffffff)
        .addFields([
            {name: 'Touchdowns', value: '1. Mikey Fera **(35)**\n2. Bear Bottonari **(26)**\n3. Ritvik Shah **(16)**'},
            {name: 'Picks (DEF)', value: '1. Bear Bottonari **(12)**\n2. Alex **(4)**\n3. Allen **(2)**'},
            {name: 'Interceptions (QB)', value: '1. (John Hertzog / Cole Jooste / Allen Ho) **(3)**\n2. (Ritvik Shah / Louie Liberatore / Franco Liberatore / Alex Belli) **(2)**\n3. (Saif Bin Hammad) **(1)**'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};