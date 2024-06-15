const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('schedule')
        .setDescription('Returns the current predictions for the DBFL'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Current DBFL Schedule`)
        .setColor(0xff914d)
        .setImage('https://cdn.discordapp.com/attachments/753687727312076841/1220820552575619143/DBFL_ALERT_6.png?ex=661054bd&is=65fddfbd&hm=f6cb1ee5a6bd03b9d30d34c51a91458ee6b6ccaa02b96b62211a9d1af302f228&')
        .addFields([
            {name: 'Week 1 (OVER) ', value: '**Wizards 49** VS Knights 28\n**Dragons 42** VS Goblins 7'},
            {name: 'Week 2 (OVER)', value: 'Dragons 28 VS Wizards **63**\nGoblins **TIED** Knights'},
            {name: 'Week 3 (OVER)', value: 'Wizards **56** VS Goblins 35\nKnights 28 VS Dragons **35**'},
            {name: 'Week 4 (OVER)', value: 'Knights 35 VS Wizards **42**\nGoblins 28 VS Dragons **42**'},
            {name: 'Week 5 (Week of June 15th)', value: 'Wizards **70** VS Dragons 21\nKnights VS Goblins'},
            {name: 'Week 6 (Week of June 22nd)', value: 'Dragons VS Knights \nGoblins VS Wizards'},
            {name: 'Conference Championship (Week of May 18th)', value: 'Wizards VS Knights \nDragons VS Goblins'},
            {name: 'SUMME BOWL II', value: 'July 6th (TBD)'},
    
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};