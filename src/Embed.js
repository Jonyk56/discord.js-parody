const { MessageEmbed } = require("discord.js");

/**
 * @module src/Embed
 */
/**
 * @typedef {Array} EmbedOptions
 * @description Array to extend from
 */
/**
 * @extends Discord.js.MessageEmbed
 * @class
 * @public
 * @example
 * new RichEmbed();
 * @since 0.1.14-beta
 * @param {EmbedOptions} options
 */
module.exports.RichEmbed = class extends MessageEmbed {
  constructor(options = null) {
    super(options);
  }
};

/**
 * @function
 * @public
 * @since 1.0.0
 * @example
 * let embed = new PDiscord.RichEmbed()
 * Pdiscord.Rembed_(embed) //true
 */
module.exports.Rembed_ = (embed) => embed instanceof MessageEmbed;
