const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('odds')
        .setDescription('Returns the current odds for the DBFL'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`DBFL Current Odds (Preseason)`)
        .setColor(0x737373)
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1220458973908435024/DBFL_ALERT_3.png?ex=660f03fe&is=65fc8efe&hm=42636c0d44b302c65d9e04babc02ae229dfe668114f58f4a81f4e4bca7247c61&')
        .setFooter({
            text: 'Make sure to check the odds every week!!!'
        })
        .addFields([
            {name: 'Most Valuable Player (MVP)', value: '(1) **Mikey Fera** +200 \n (2) **Alex Belli** +300 \n (3) **Louie Liberatore** +600'},
            {name: 'Offensive Play of The Year (OPOY)', value: '(1) **Alex Belli** +300 \n (2) **Louie Liberatore** +500 \n (3) **Franco Liberatore** +800'},
            {name: 'Defensive Player of The Year (DPOY)', value: '(1) **Mikey Fera** +200 \n (2) **Alex Belli** +300 \n (3) **Louie Liberatore** +500 \n (4) **Franco/Ritvik** +800'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};