import apiHelper from "../../../utils/apiHelper";
import {productService} from "../productService";

jest.mock('../../../utils/apiHelper');
describe('service test', () => {
    test('should return products when get request', async () => {
        const products = [{"id": 1, "name": "小米手环", "price": 299.00, "count": 1}];

        apiHelper.get.mockResolvedValue(products);

        const response = await productService.getAllProducts();

        expect(response).toEqual(products);
    });
});