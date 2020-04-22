const { UserManager, ChannelManager, GuildManager, Client } = require("discord.js");
//@ts-ignore 1005
/**
 * Parity client hub 
 * @class ParodyClient
 * @extends {Client} Discord.js Client
 * @since 0.0.1
 */
module.exports.ParodyClient = class extends Client {
    constructor(options = {}) {
        super(options)
        return this
    }
    /**
     * Initializes Parity Updater
     * @since 0.0.1
     * @description This currently does NOT work, do not use!!!
     * @param {Object} options not yet used
     * @returns {Client} Client
     */
    Parody(options = {}) {
        this.users = {
            ...this.users,
            ...this.users.cache
        }
        this.guilds = {
            ...this.guilds,
            ...this.guilds.cache
        }
        this.channels = {
            ...this.channels,
            ...this.channels.cache
        }
    }
}