const {ShardingManager} = require ('discord.js');
const manager = new ShardingManager ('./index.js', {totalShards: 'auto', token: 'NzgxNTM2NjE2MjIwMDY1ODA0.X7_EsQ.Ax-6D12TsDznv7anTUHos9R8yKM'}); // TOKEN discord.com/developers Alabilirsiniz!

manager.on ('shardCreate', shard => console.log (`Shardlar Başlatılıyor!`));
manager.spawn ();