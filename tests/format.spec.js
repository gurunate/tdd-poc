'use strict';

const {expect} = require('chai');
const {formatCurrency} = require('../libs/format');

describe('format', () => {
    describe('currency', () => {
        it('should accept a number', () => {
            expect(formatCurrency(5)).to.not.throw;
        });

        it('should not accept a string', () => {
            expect(() => {
                formatCurrency('5');
            }).to.throw(/not a number/);

        });
    });
});
