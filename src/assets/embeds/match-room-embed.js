const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
} = require("discord.js");

const thumbnailUrl =
	"https://cdn.discordapp.com/attachments/549053891476455436/677649538214920217/black_bar_transparent.png1.png?ex=6584c2d0&is=65724dd0&hm=c832f28a000b02d7417a260a716a95e917e36ed3adae3db6bdeff92d14b6341a&";

// fix this later
// let doc = await pugModel.findOne({
// 	serverId: interaction.guild.id,
// 	categoryName: categoryName,
// });

// let queuedPlayers = doc.queuedPlayers;

// Create the embed
function matchRoomEmbed() {
	return new EmbedBuilder()
		.setThumbnail(thumbnailUrl)
		.setTitle("Match Room Interface!")
		.setDescription("Click the button below if you need a substitute player.")
		.addFields(
			{
				name: "Team 1",
				// add player from database array and not hard coded
				value: "player1\nplayer2\nplayer3\nplayer4\nplayer5",
				inline: true,
			},
			{
				name: "Team 2",
				// add player from database array and not hard coded
				value: "player6\nplayer7\nplayer8\nplayer9\nplayer10",
				inline: true,
			}
		)
		.setColor(0x2a2d31);
}

// Create the button
const subButton = new ButtonBuilder()
	.setCustomId("substitute")
	.setLabel("Sub Button")
	.setStyle(ButtonStyle.Primary);

// Create an action row and add the button to it
const row = new ActionRowBuilder().addComponents(subButton);

// Export the embed and components
module.exports = {
	matchRoomEmbed,
	components: [row],
};
