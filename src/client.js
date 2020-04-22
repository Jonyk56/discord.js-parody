const {
    UserManager,
    ChannelManager,
    GuildManager,
    Client,
    Collection,
} = require("discord.js");
//@ts-ignore 1005
/**
 * Parity client hub
 * @class ParodyClient
 * @extends {Client} Discord.js Client
 * @since 0.0.1
 */
module.exports.ParodyClient = class extends Client {
    constructor(options = {}) {
        super(options);
        return this;
    }
    /**
     * @global
     * @typedef {UserManager} UserCacheData
     * @description Data of user collections
     */

    /**
     * Gains User cache, moves all of it to a seperate object
     * @method UserCache
     * @public
     * @param {UserCacheData} Data
     * @returns null
     */
    UserCache(Data = {}) {
        if (Data == {}) {
            Data = this;
        }
        this._users = this._cache.users = Data;
    }
    /**
     * @global
     * @typedef {object} ChannelOptions
     * @property {Function} filter
     * @property {ChannelManager} ChannelData
     */
    /**
     * @method ChannelCache
     * @param {ChannelOptions} ChannelOptions
     * @public
     * @returns null
     * @example 
     * Client.ChannelCache.each( channel => console.log(channel.name))
     */
    ChannelCache(ChannelOptions = {}) {
        if (!ChannelOptions.filter) {
            throw new Error("Filter function required");
        }
        if (ChannelOptions.ChannelData) {
            var { ChannelData } = ChannelOptions;

        }
        this.channels.cache.filter(ChannelOptions.filter)
    }
};
