import { toastify } from '../../../plugins/toastify';

/* eslint-disable camelcase */
export default class Bitly {

    constructor({
        id = '',
        link = '',
        long_url = '',
    } = {}) {
        this.id = id;
        this.link = link;
        this.longURL = long_url;
        Object.freeze(this);
    }

    async copyLinkToClipboard() {
        try {
            await navigator.clipboard.writeText(this.link);
        } catch (err) {
            toastify.error('Failed to copy!');
        }
    }

}
