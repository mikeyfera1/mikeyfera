const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('roster')
        .setDescription('Returns the current roster of the DBFL'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Current DBFL Roster`)
        .setColor(0xffffff)
        .setImage('https://cdn.discordapp.com/attachments/752530922905010261/1217954652801339513/DBFL_LLC_Logo.png?ex=6605e7a9&is=65f372a9&hm=f89e092fd7f54be4316996120399fedae532105d56d1b7a0299146712b79cb18&')
        .setFooter({
            text: 'Check back to see if someone got injured'
        })
        .addFields([
            {name: 'Active Players (21)', value: 'Mikey Fera, Alex Belli, Louie Liberatore, John Hertzog, Franco Liberatore, Ritvik Shah, Saif Bin Hammad, Yousef Bin Hammad, Michael Barsotti, Liam Holleran, Ben Bordenstein, Adam Spotts, Colin Liang, Burhaan Waheed, Hasan Baddaruddin, Gabe Pacella, Scott Cheung, Allen Ho, Cole Jooste, Arun Vasudevan, Bear Bottonari, Aiden Shaffer'},
            {name: 'Inactive Players (1)', value: 'Patrick Hynds'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};