const sendEmail = require('./sendEmail');
const EmailTemplate = require('../models/EmailTemplate');
const { TransactionService } = require('../services');

module.exports = async (transactionId) => {
    const transaction = await TransactionService.getTransaction(transactionId)
    if(transaction){
        const template = await EmailTemplate.findOne({ number: 12 });
        const title = template.name.replace('$number', transaction.transactionNumber);
        const html = template.html.replace('$name', transaction.user.name)
                        .replace('$number', transaction.transactionNumber);
        await sendEmail({
            to: transaction.user.email,
            subject: title,
            html,
        });
    }
}