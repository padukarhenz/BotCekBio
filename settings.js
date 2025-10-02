const fs = require('fs')


global.namabot = "Bot Whatsapp" // Nama Bot
global.namaowner = "Orang" // NAMA OWNER
global.author = 'Bot Whastapp'
global.packname = 'Made by'
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.owner = ['6285835982637'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// PEMISAH \\
global.sessionName = 'session'
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.pmBlock = false // Mau Bot hanya bisa respon di grup, ubah jadi true


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})