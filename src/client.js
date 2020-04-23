const {
  UserManager,
  ChannelManager,
  GuildManager,
  Client,
  Collection,
} = require("discord.js");
/**
 * @module src/client
 */
//@ts-ignore 1005

module.exports.ParodyClient = class extends Client {
  /**
   *
   * @param {ClientOptions} options
   */
  constructor(options = {}) {
    super(options);
    return this;
  }
  /**
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
   * @typedef {object} ChannelOptions
   * @property {Function} filter
   * @description filter to use during processing
   * @property {ChannelManager} ChannelData
   * @description Data of the channel
   */
  /**
   * @method ChannelCache
   * @param {ChannelOptions} ChannelOptions
   * @public
   * @returns null
   * @example
   * Client.ChannelCache({ filter: _ => _.id > 0}).each( channel => console.log(channel.name))
   */
  ChannelCache(ChannelOptions = {}) {
    if (!ChannelOptions.filter) {
      throw new Error("Filter function required");
    }
    if (ChannelOptions.ChannelData) {
      var { ChannelData } = ChannelOptions;
      this._channels = this.cache._channels = ChannelData.filter(
        ChannelOptions.filter
      );
    }
    this._channels = this.channels.cache.filter(ChannelOptions.filter);
  }
};
