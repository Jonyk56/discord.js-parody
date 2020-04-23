const { MessageEmbed } = require("discord.js");
/**
 * @typedef {Array} EmbedOptions
 * @description Array to extend from
 */
/**
 * @module src/Embed
 */
/**
 * @extends Discord.js.MessageEmbed
 * @class
 * @public
 * @example
 * new RichEmbed();
 * @since 0.1.14-beta
 */
module.exports.RichEmbed = MessageEmbed;

/**
 * @function
 * @public
 * @since 1.0.0
 * @example
 * let embed = new PDiscord.RichEmbed()
 * Pdiscord.Rembed_(embed) //true
 * 
 */
module.exports.Rembed_ = (embed) => embed instanceof MessageEmbed;
