const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('power')
        .setDescription('Returns Power Rankings for the Week'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Power Rankings (Week 1)`)
        .setColor(0x000000)
        .setImage('https://cdn.discordapp.com/attachments/1220085546190110900/1221484093401993376/DBFL_ALERT_8.png?ex=6612beb5&is=660049b5&hm=c6da56b9476181373255fe8916e9b2a53f1d40e00bfff0f410884d624237e567&')
        .setFooter({
            text: 'Make sure to check out the stats of all Players!!'
        })
        .addFields([
            {name: '1. D.C Wizards', value: 'Showed strong talent as they maintain offense production, with stoppage on defense'},
            {name: '2. Detroit Dragons', value: 'Have light going in their direction with an amazing first start to the season'},
            {name: '3. Denver Knights', value: 'Showed strength in areas but their ability to maintain fell'},
            {name: '4. Green Bay Goblins', value: 'Players showed spurts of light, but ultimately ended in tragedy'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};