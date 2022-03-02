import axios from 'axios';
import apiHelper from '../apiHelper';

jest.mock('axios');
describe('apiHelper test', () => {
    test('should return success when get request', async () => {
        axios.get.mockResolvedValue('success');

        const response = await apiHelper.get('http://localhost:8000');

        expect(response).toBe('success');
    });
});
