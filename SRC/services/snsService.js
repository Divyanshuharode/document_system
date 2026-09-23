const { PublishCommand } = require("@aws-sdk/client-sns");

const sns = require("../config/snsConfig");


const sendNotification = async () => {
    const sendNotifi = new PublishCommand({
        TargetArn: process.env.AWS_SNS_TOPIC_ARN,
        Subject: " document upload ",
        Message: "heeeloooo this is runing......"
    })

    await sns.send(sendNotifi);
}

module.exports = sendNotification;



