const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/s2m6rw.jpeg" || "https://files.catbox.moe/s2m6rw.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© °°ᴍᴜɢɪᴡᴀʀᴀ ɴᴏ ᴘʟᴀɢ °•°°" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50947440869";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_37_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4ekNpbVlFdXVZeXRSOFJVYTJQdFROUHZVRURsN2lzVEkxV1VyM2pxczFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTQ3NDQwODY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOTJDOTlGNDBBNTRDMTZENEVGNEVDRDY1MDc0MTk2Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI5NzAyMTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUGIxUjRZWk5Rc2FRb3BxNmVjeVU3Z1wiLFxuICBcInBob25lSWRcIjogXCIwYzg2NDMxNi0zZmFjLTQ5N2ItYmE4MC04YTUyNGQ3NDYwZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICAyMyxcbiAgICAgIDIyLFxuICAgICAgNjcsXG4gICAgICAxNjksXG4gICAgICA1OCxcbiAgICAgIDIsXG4gICAgICAyMTEsXG4gICAgICA3MixcbiAgICAgIDI0MCxcbiAgICAgIDEyNyxcbiAgICAgIDM4LFxuICAgICAgODgsXG4gICAgICAxNjUsXG4gICAgICA2NCxcbiAgICAgIDEzLFxuICAgICAgMjI3LFxuICAgICAgNzEsXG4gICAgICAxNDQsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAzNCxcbiAgICAgIDE4LFxuICAgICAgMTkzLFxuICAgICAgMTU2LFxuICAgICAgMjU1LFxuICAgICAgMTg1LFxuICAgICAgMTA1LFxuICAgICAgNDcsXG4gICAgICAxMjMsXG4gICAgICA3OSxcbiAgICAgIDEzMSxcbiAgICAgIDg5LFxuICAgICAgMjUsXG4gICAgICA3MyxcbiAgICAgIDE2LFxuICAgICAgMTE1LFxuICAgICAgMTE4LFxuICAgICAgNjMsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlJRWFQ3M1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQ3NDQwODY5OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzA3MjI0MTA5NDg2OTo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdVVxN0FHRU9HTnJMb0dHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjcvaCtYVW9GVFAzemI3OHNRM0VCQmR2Szc2QXZoYlNkM08rNVBoNFVoelU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMmZ4Zkh3aUpreHRrb25QMnJXM3pvWjdsUm8zNWt5Z0NNODVaQTVORWpkMUtGY3VhVm95djZsUXFmZEtqTjVsL1NYajVDT3puRWJRZUlLdGZ0cmZvQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicU1BOVBuNHQ3NkVGekx2cXFJcTBpdEIyYXBxQyt4RzJuVXN6b1hiYW5CSXk1eHZwVWRxS28zSDlHeGVJT2wzQ0pITmNCOUYvTEVPS1dKd2lnQ3Y2QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5NDc0NDA4Njk6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjk3MDIxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQ0VBQURvUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFDRUFBRG9SLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVThoTEErcnJIQ2hoMzhRRGJFYkhCc09tYVI2T2p4dEVVT1lZY1FrNGw3cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzExOTgzMjI1LFwiY3VycmVudEluZGV4XCI6MjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjAsMjMsMjQsMjYsMjddfSxcInRpbWVzdGFtcFwiOlwiMTczMDI5NTQ5NzYwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "PLAG-XMD",
  ownername:process.env.OWNER_NAME|| "°°ᴍᴜɢɪᴡᴀʀᴀ ɴᴏ ᴘʟᴀɢ °•°°",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
