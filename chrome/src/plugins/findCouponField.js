function findCouponField() {
    const inputFields = window.querySelectorAll('input[type="text"]');
    const keywords = ['coupon', 'promo', 'discount', 'voucher', 'code', 'promotion'];

    console.log(keywords);
    console.log(inputFields);
    for (let field of inputFields) {
        for (let keyword of keywords) {
            if (field.name.toLowerCase().includes(keyword) ||
                field.id.toLowerCase().includes(keyword) ||
                (field.placeholder && field.placeholder.toLowerCase().includes(keyword))) {
                return field;
            }
        }
    }
    return null;
}

export default findCouponField;
