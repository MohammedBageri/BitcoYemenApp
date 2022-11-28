const EmailTemplate = require('../models/EmailTemplate');

const transactionCreated = {
    name: "$number تم إكمال طلبك",
    html: `<h3>السيد/ه $name <br> 
    تم  استلام مدفوعاتك للعملية رقم $number سيتم تنفيذ طلبك خلال دقائق <br> 
    معلومات العملية: <br> 
    رقم : $number <br>
    رصيد: $from الى $to <br>
    المبلغ المحول : $transfer <br>
    المبلغ المستلم : $receive <br>
    <h3>`,
    number:11
}
const transactionSuccess = {
    name: "$number تم تنفيذ طلبك ",
    html: `<h3>السيد/ه $name <br> 
    تم اكتمال طلبك بنجاح للعملية رقم $number <br> 
    يسعدنا تقييمك على 
    <a href="https://www.facebook.com/Bitcoyemen/">صفحتنا بالفيس بوك</a>
    او 
    <a href="https://bitcoyemen.com/">موقعنا</a> <br>
    كن شريكا واحصل على ارباح من رسوم الخدمه
    من خلال مشاركة وتسجيل أصدقائك برابط الاحاله  الخاص بك
    <a href="https://bitcoyemen.com/">رابط الاحاله/a> <br>
    <h3>`,
    number:12
}
const orderCreated = {
    name: "الطلب تم بنجاح",
    html: "<h1>تم إتمام الطلب بنجاح رقم الطلب $number<h1>",
    number:21
}
const orderSuccess = {
    name: "تم إكمال الطلب",
    html: "<h1>تم إكمال طلبك رقم الطلب $number <h1>",
    number:22
}

const templates = [ transactionCreated, transactionSuccess, orderCreated, orderSuccess];

async function createTemplateIfNotExist(template) {
    const exist = await EmailTemplate.findOne({ number: template.number });
    if (!exist) {
        await EmailTemplate.create(template);
    }
}

module.exports = async () => {
    templates.forEach(async (template) => {
        await createTemplateIfNotExist(template);
    })
}