module.exports.config = {
	name: "uid",
	version: "1.0.0",
	role: 0,
	credits: "Hinata",
	description: "Get User ID.",
	cooldown: 5,
	hasPrefix: false,
};

module.exports.run = async function ({ api, event, args, Users }) {
	let { threadID, senderID, messageID } = event;
	let uid = senderID; // Default to the sender's ID if no specific condition is met

	if (!args[0]) {
		uid = senderID;
	}

	if (event.type === "message_reply") {
		uid = event.messageReply.senderID;
	}

	if (args.join(" ").indexOf("@") !== -1) {
		uid = Object.keys(event.mentions)[0];
	}

	// Send the user ID as a message
	await api.sendMessage(uid, threadID, messageID);
};
