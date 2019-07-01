import { axios, jsonToParams, jsonToQueryString } from '../../index';

var AutocompleteDataSource = function AutocompleteDataSource(request, query) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  query = query || '';
  var url;
  var method = 'get';
  var data;
  var headers = {};

  if (typeof request === 'string') {
    url = request;
  }

  if (typeof request === 'function') {
    url = request({
      query: query,
      page: page
    });
  }

  if (typeof request === 'object') {
    url = request.url;
    method = request.method || method;
    data = typeof request.data !== 'function' ? request.data : request.data({
      query: query,
      page: page
    });
    headers = request.headers;

    if (method === 'get') {
      url = url + jsonToQueryString(data);
      data = null;
    }
  }

  return {
    get: function get() {
      var _jsonToParams = jsonToParams(url, data),
          newUrl = _jsonToParams.url,
          newData = _jsonToParams.data;

      var config = {
        url: newUrl,
        method: method,
        headers: headers,
        data: newData
      };
      return axios(config);
    }
  };
};

export default AutocompleteDataSource;