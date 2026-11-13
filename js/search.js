export function searchChannels(arr , channel) {
   const search = arr.filter(p => p.name.toLowerCase().includes(channel.toLowerCase()) || String(p.channelNumber).includes(channel));
    return search
}
