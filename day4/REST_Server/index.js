const server = require('./server');
const database = require('./database');

// 서버 시작하면서, 데이터베이스 주입
server.start(database);