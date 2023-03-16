const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
{ name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
{ name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
{ name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];

const players = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends'));



if (streamers.age > 35) {
    streamers.gameMorePlayed = streamers.gameMorePlayed.toUpperCase();
 };

console.log(players);
