'use strict';

module.exports = {
    formatCurrency(val) {
        if (typeof val !== 'number') {
            throw 'not a number';
        }

        return '$' + val;
    }
};
