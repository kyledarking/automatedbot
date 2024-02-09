module.exports.config = {
	name: "info",
	version: "1.0.1", 
	role: 0,
	credits: "cliff",
	description: "Admin and Bot info.",
	cooldowns: 5,
	hasPrefix: false,
};
module.exports.run = async function({ api,event,args,prefix,client,Users,Threads,__GLOBAL,Currencies }) {
 let time = process.uptime();
 let years = Math.floor(time / (60 * 60 * 24 * 365));
 let months = Math.floor((time % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
 let days = Math.floor((time % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
 let weeks = Math.floor(days / 7);
 let hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
 let minutes = Math.floor((time % (60 * 60)) / 60);
 let seconds = Math.floor(time % 60);
 const timeStart = Date.now();
	
const uptimeString = `${years > 0 ? `${years} ${yearsString} ` : ''}${months > 0 ? `${months} ${monthsString} ` : ''}${weeks > 0 ? `${weeks} ${weeksString} ` : ''}${days % 7 > 0 ? `${days % 7} ${daysString} ` : ''}${hours > 0 ? `${hours} ${hoursString} ` : ''}${minutes > 0 ? `${minutes} ${minutesString} ` : ''}${seconds} ${secondsString}`;
const CREATORLINK = "https://www.facebook.com/swordigo.swordslush";
const BOTCREATOR = "CLIFFVINCENT";
const BOTNAME = "YAZKYBOT";
const FILESOWNER = "CID";
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =["https://i.imgur.com/9LDVC57.mp4", "https://i.imgur.com/r7IxgiR.mp4",  "https://i.imgur.com/J1jWubu.mp4",
"https://i.imgur.com/DJylTiy.mp4",  "https://i.imgur.com/v4mLGte.mp4",  "https://i.imgur.com/uthREbe.mp4",  "https://i.imgur.com/ee8fHna.mp4",  "https://i.imgur.com/VffzOwS.mp4",
"https://i.imgur.com/ci5nztg.mp4",
"https://i.imgur.com/qHPeKDV.mp4",
"https://i.imgur.com/Rkl5UmH.mp4"];
var callback = () => api.sendMessage({body:`➢ Admin and Bot Information

⁂ Bot Name: ${name}
✧ Bot Admin: ${BOTCREATOR}
♛ Bot Admin Link: ${CREATORLINK}
❂ Bot Prefix: ${prefix}
✫ Files Owner: ${FILESOWNER}
➟ UPTIME ${uptimeString}
✬ Today is: ${juswa} 

➳ Bot is running ${hours}:${minutes}:${seconds}.
✫ Thanks for using my bot
`,attachment: fs.createReadStream(__dirname + "owner_video.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "owner_video.mp4")); 
			return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"owner_video.mp4")).on("close",() => callback());
	 };