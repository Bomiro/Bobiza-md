import { googleImage } from  '@bochilteam/scraper' 
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link,  'google.jpg' , `* instagram.com/noureddine_ouafy *
🔎 *النتيجة:* ${text}
🌎 *الصورة مأخوذة من:* Google
`,m)
}
handler.help = [ 'gimage' ]
handler.tags = [ 'internet' ]
handler.command = /^(gimage|image)$/i

export default handler
