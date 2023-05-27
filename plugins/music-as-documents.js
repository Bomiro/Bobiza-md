import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*هذا الأمر خاص بتحميل الأغاني* \n                    مثال : \n *.music* midle of night'
await m.reply(`███████▒▒▒ 100% \n جاري التحميل المرجو الانتظار قليلا وأنت تنتظر تحميل الملف لماذا لا تقوم بمتابعتي هنا ♥ \n instagram.com/noureddine_ouafy `)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `*◉—⌈📥 ⋘ BOBIZA... ⋙

▒▒▒▒▒▒▒▒▒▒ 0%
█▒▒▒▒▒▒▒▒▒ 10%
██▒▒▒▒▒▒▒▒ 20%
███▒▒▒▒▒▒▒ 30%
████▒▒▒▒▒▒ 40%
█████▒▒▒▒▒ 50%
██████▒▒▒▒ 60%
███████▒▒▒ 70%
████████▒▒ 80%
█████████▒ 90%
██████████ 100%

تم تحميل الملف بنجاح ！ 📥⌋—◉*\n❏ *titre:* ${ttl}\n❏ *Size:* ${size}`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=85faf717d0545d14074659ad&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `*◉—⌈📥 ⋘ BOBIZA... ⋙

▒▒▒▒▒▒▒▒▒▒ 0%
█▒▒▒▒▒▒▒▒▒ 10%
██▒▒▒▒▒▒▒▒ 20%
███▒▒▒▒▒▒▒ 30%
████▒▒▒▒▒▒ 40%
█████▒▒▒▒▒ 50%
██████▒▒▒▒ 60%
███████▒▒▒ 70%
████████▒▒ 80%
█████████▒ 90%
██████████ 100%

تم التحميل！ 📥⌋—◉*\n❏ *titre:* ${n}\n❏ *size:* ${n3}`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch {
await conn.reply(m.chat, 'هناك مشكلة حاول لاحقا أو قل لنورالدين إن بوبيزة لا تحمل الاغاني 😹😹 \n instagram.com/noureddine_ouafy', m)}
}}
handler.command = /^ytmp3doc|music$/i
export default handler
