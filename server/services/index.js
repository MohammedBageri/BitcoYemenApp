const {
    getAllCurrencies,
    getSingleCurrency,
    addCurrency,
    updateCurrency,
    activateCurrency,
} = require('./currencyService');
const {
    createExchangeDirection,
    editExchangeDirection,
    getAllExchangeDirections,
    getExchangeDirection,
    activateExDirection,
} = require('./exchangeDirectionService');
const {
    createTransaction,
    addPaymentDetails,
    changeTransactionStatus,
    editTransactionExchange,
    getUserTransactions,
    getTransaction,
    getAllTransactions,
} = require('./transactionService');
const {
    createBlog,
    updateBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
} = require('./blogService');
const {
    setServiceAvailability,
    getServiceAvailability,
    setTransactionExpiration,
    getTransactionExpiration,
    setAffiliateRate,
    getAffiliateRate,
} = require('./settingService');
const {
    createProduct,
    updateProduct,
    getAllProducts,
    getProduct,
} = require('./productService');
const {
    createOrder,
    addOrderPaymentDetails,
    changeOrderStatus,
    getUserOrders,
    getOrder,
    getAllOrders,
} = require('./orderService');
const {
    createRecommendation,
    editRecommendation,
    getAllRecommendations,
    getRecommendation,
    deleteRecommendation,
} = require('./recommendationService');
const {
    createEmailTemplate,
    editEmailTemplate,
    getAllEmailTemplate,
    getEmailTemplate,
    deleteEmailTemplate,
} = require('./emailTemplateService');
const {
    depositAccount,
    withdrawAccount,
    getAffiliateAccount,
} = require('./AffiliateService');

module.exports = {
    CurrencyService: {
        getAllCurrencies,
        getSingleCurrency,
        addCurrency,
        updateCurrency,
        activateCurrency
    },
    ExchangeDirectionService: {
        createExchangeDirection,
        editExchangeDirection,
        getAllExchangeDirections,
        getExchangeDirection,
        activateExDirection
    },
    TransactionService: {
        createTransaction,
        addPaymentDetails,
        changeTransactionStatus,
        editTransactionExchange,
        getUserTransactions,
        getTransaction,
        getAllTransactions,
    },
    BlogService: {
        createBlog,
        updateBlog,
        getAllBlogs,
        getBlog,
        deleteBlog,
    },
    SettingService: {
        setServiceAvailability,
        getServiceAvailability,
        setTransactionExpiration,
        getTransactionExpiration,
        setAffiliateRate,
        getAffiliateRate,
    },
    ProductService: {
        createProduct,
        updateProduct,
        getAllProducts,
        getProduct,
    },
    OrderService: {
        createOrder,
        addOrderPaymentDetails,
        changeOrderStatus,
        getUserOrders,
        getOrder,
        getAllOrders,
    },
    RecommendationService: {
        createRecommendation,
        editRecommendation,
        getAllRecommendations,
        getRecommendation,
        deleteRecommendation,
    },
    EmailTemplateService: {
        createEmailTemplate,
        editEmailTemplate,
        getAllEmailTemplate,
        getEmailTemplate,
        deleteEmailTemplate,
    },
    AffiliateService: {
        depositAccount,
        withdrawAccount,
        getAffiliateAccount,
    }
}