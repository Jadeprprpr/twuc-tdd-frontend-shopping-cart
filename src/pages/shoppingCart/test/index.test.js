import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';

describe('Shopping Cart', () => {
    test('should show shopping cart page', () => {
        const { getByText } = render(<ShoppingCart/>);

        expect(getByText('Shopping Cart')).toBeInTheDocument();
    });

    test('should show products table', () =>{
        const { container } = render(<ShoppingCart />);
        const thElems = container.getElementsByTagName('th');

        expect(thElems.length).toBe(3);

        expect(thElems.item(0)).toHaveTextContent('商品名称');
        expect(thElems.item(1)).toHaveTextContent('单价');
        expect(thElems.item(2)).toHaveTextContent('数量');
        ['商品名称', '单价', '数量'].forEach((value, index) => {
            expect(thElems.item(index)).toHaveTextContent(value);
        });
    });
});
