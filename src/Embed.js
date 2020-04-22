const { MessageEmbed } = require("discord.js")
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
 */
module.exports.RichEmbed = class extends MessageEmbed {

    /**
     * @param {EmbedOptions} embed
     */
    constructor(embed = []) {
        super(embed)
        return this;
    }
}