const autodownfb = "𝗔𝗨𝗧𝗢𝗗𝗢𝗪𝗡 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞-𝗩𝗜𝗗𝗘𝗢\n";
const autodowntiktok = "𝗔𝗨𝗧𝗢𝗗𝗢𝗪𝗡 𝗧𝗜𝗞𝗧𝗢𝗞-𝗩𝗜𝗗𝗘𝗢\n";
const axios = require('axios');
const fs = require('fs');
const getFBInfo = require('@xaviabot/fb-downloader');

module.exports.config = {
		name: "autodownload",
		version: "2.0.4",
};

module.exports.handleEvent = async function ({ api, event, body, threadID, messageID }) {
		if (event.body !== null) {
				const facebookLinkRegex = /https:\/\/www\.facebook\.com\/\S+/;
				if (facebookLinkRegex.test(event.body)) {
						try {
								const fbInfo = await getFBInfo(event.body);
								let fbResponse = await axios.get(encodeURI(fbInfo.sd), { responseType: 'arraybuffer' });
								fs.writeFileSync('./video.mp4', Buffer.from(fbResponse.data, 'arraybuffer'));
								api.sendMessage({ body: autodownfb, attachment: fs.createReadStream('./video.mp4') }, event.threadID, () => fs.unlinkSync('./video.mp4'));
						} catch (error) {
								console.error(error);
						}
				}
		}

		const tiktokRegex = /https:\/\/(www\.|vt\.)?tiktok\.com\//;
		if (tiktokRegex.test(body)) {
				api.sendMessage('📥', event.messageID, () => {}, true);
				axios.get(body)
						.then(async (response) => {
								const videoUrl = response.data.match(/"url":"([^"]+)"/)[1];
								const tiktokResponse = await axios.get(videoUrl, { responseType: 'stream' });
								const filename = 'TikTok-' + Date.now() + '.mp4';
								const tiktokStream = fs.createWriteStream('./' + filename);
								tiktokResponse.data.pipe(tiktokStream);
								tiktokStream.on('finish', () => {
										console.info('Downloaded video file.');
										api.sendMessage({ body: autodowntiktok, attachment: fs.createReadStream('./' + filename) }, event.threadID, () => fs.unlinkSync('./' + filename));
								});
						})
						.catch(error => {
								api.sendMessage('Error when trying to download the TikTok video: ' + error.message, event.threadID, event.messageID);
						});
		}
};