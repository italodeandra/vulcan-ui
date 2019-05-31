function jsonToQueryString(json) {
    const params = Object.keys(json).map(function (key) {
        const value = json[key];
        if (typeof value !== 'undefined') {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }
        return null
    }).filter(item => item);
    return (params.length ? '?' : '') + params.join('&');
}

export default jsonToQueryString
