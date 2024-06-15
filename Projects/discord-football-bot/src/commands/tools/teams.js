const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('teams')
        .setDescription('Returns a list of current teams in the DBFL'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`DBFL Team Leaderboard`)
        .setColor(0xffffff)
        .setImage('https://cdn.discordapp.com/attachments/931690081792696370/1215804422387531888/NBC_1.png?ex=66074f9a&is=65f4da9a&hm=a7ee1a3dfb4aeea950e2dc6ab53ba91d060adc28a7d9240c449052dd2c7e5dbe&g')
        .setFooter({
            text: 'Check out each teams stats!!!'
        })
        .addFields([
            {name: '(1) D.C Wizards (5-0)'},
            {name: '(2) Detroit Dragons (3-2)'},
            {name: '(3) Denver Knights (0-3-1)'},
            {name: '(4) Green Bay Goblins (0-3-1)'},
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};