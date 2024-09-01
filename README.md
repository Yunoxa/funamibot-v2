# funamibot-v2
A new version of the Yui Funami discord bot, now in development!
All of the code is being rewritten using the Eris library.

## How to run
If you'd like to run this bot on your own machine, here's how to do so!

### Things you'll need
1. A token for your discord bot. Can be acquired from the developer portal.
   
#### Optional
1. A second token for a testing version of the bot which will use guild commands for testing instead of global (recommended for dev).
2. A discord guild id (required for guild commands in testing bot).
3. AWS access and secret keys (required for S3 functionality which is used for images).

### Steps
1. Clone the repo.
2. Run npm install.
3. Create .env file with following parameters as needed (TOKEN (required), TESTTOKEN (optional), AWS_ACCESSKEY (optional), AWS_SECRETKEY (optional), GUILDID (optional)).
4. Run "node index.js" (global) or "node dev.js" (guild/testing).
5. Profit.
