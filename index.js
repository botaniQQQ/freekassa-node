module.exports = (params, world) => {
    if (!params || !world || typeof params !== 'object') {
        throw new Error('Missing params and secret world');
    }

    let result = {},
        params_arr = [],
        url = 'http://www.free-kassa.ru/merchant/cash.php?';

    params = JSON.parse(JSON.stringify(params));

    if (params.oa) {
        params.oa = parseFloat(params.oa).toString();
    }

    if (params.m && params.oa && params.o) {
        params_arr.push(params.m);
        params_arr.push(params.oa);
        params_arr.push(world);
        params_arr.push(params.o);
    } else if (params['MERCHANT_ID'] && params['AMOUNT'] && params['MERCHANT_ORDER_ID']) {
        params_arr.push(params['MERCHANT_ID']);
        params_arr.push(params['AMOUNT']);
        params_arr.push(world);
        params_arr.push(params['MERCHANT_ORDER_ID']);
        return {signature: require('crypto')
                .createHash('md5')
                .update(params_arr.join(':'))
                .digest('hex')};
    } else {
        throw new Error('Required parameters are not specified');
    }

    result.signature = require('crypto')
        .createHash('md5')
        .update(params_arr.join(':'))
        .digest('hex');

    params.s = result.signature;

    Object.keys(params).forEach(function (p) {
        url += p + '=' + encodeURIComponent(params[p]) + '&';
    });

    result.url = url;

    return result;
};