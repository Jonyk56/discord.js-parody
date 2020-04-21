const { MessageEmbed } = require("discord.js")
/**
     * @typedef {Array|undefined} EmbedOptions
     */
/**
 * @extends Discord.js.MessageEmbed
 */
module.exports.RichEmbed = class extends MessageEmbed {

    /**
     * @param {EmbedOptions} embed
     */
    constructor(embed = undefined) {
        embed == undefined ? super() : super(embed);
        return this
    }
}