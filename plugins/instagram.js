import fetch from 'node-fetch'
import instagramGetUrl from 'instagram-url-direct'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `*هذا الامر خاص بالتحميل من الانستغرام \n, مثل: ${usedPrefix + command}* https://www.instagram.com/reel/Cr32gmlt2GF/?igshid=MzRlODBiNWFlZA==` 
try {
switch (command) {        
case "instagramdl": case "instagram": case "igdl": case "ig": case "insta": 
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `للمزيد:\nhttps://www.facebook.com/profile.php?id=100090780515885`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)
    m.react(done)
break  
case "instagramdl2": case "instagram2": case "igdl2": case "ig2":        
const resultss = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `🔗 *Url:* ${shortUrl2}`.trim()
conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
break               
case "instagramdl3": case "instagram3": case "igdl3": case "ig3":            
const resultssss = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0])).catch(async _ => await instagramdlv3(args[0])).catch(async _ => await instagramdlv4(args[0]))
let shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${r.medias[i].url}`)).text()
let txt3 = `🔗 *Url:* ${shortUrl3}`.trim()
for (const { url } of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
break       
}} catch {
await await m.reply(`*عذراً هناك خطأ*\n\nاعلمنا على صفحتنا اذا استمر نفس الخطأ:\nhttps://www.facebook.com/profile.php?id=100090780515885`)
}}
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3|insta)$/i
export default handler