let { Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
	m.reply(m.chat, 'media/esu.jpg', '*BOT: _Esubot_\n\nCuztom🐬', m)
	m.reply(`wa.me//+529984907794
👑Samu330👑`.trim())
	m.reply(`Hola @user!`.trim())
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
