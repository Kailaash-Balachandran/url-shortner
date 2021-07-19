import Bitly from './Bitly';

const originalClipboard = { ...global.navigator.clipboard };
const mockResponse = { created_at: '2021-07-15T19:06:15+0000', id: 'bit.ly/3idd6rY', link: 'https://bit.ly/3idd6rY', custom_bitlinks: [], long_url: 'https://kardsort.com/', archived: false, tags: [], deeplinks: [], references: { group: 'https://api-ssl.bitly.com/v4/groups/Bl7fhXza0wE' } };

beforeEach(() => {
    const mockClipboard = {
        writeText: jest.fn(),
    };
    global.navigator.clipboard = mockClipboard;
});

afterEach(() => {
    jest.resetAllMocks();
    global.navigator.clipboard = originalClipboard;
});

test('should create default object with expected fields', () => {
    const bitly = new Bitly();
    expect(bitly).toMatchObject({ id: '', link: '', longURL: '' });
});

test('should create object with expected fields from api response', () => {
    const bitly = new Bitly(mockResponse);
    expect(bitly).toMatchObject({ id: 'bit.ly/3idd6rY', link: 'https://bit.ly/3idd6rY', longURL: 'https://kardsort.com/' });
});

test('should copy link to clipboard', () => {
    const bitly = new Bitly(mockResponse);
    bitly.copyLinkToClipboard();
    expect(navigator.clipboard.writeText).toBeCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        'https://bit.ly/3idd6rY',
    );
});
