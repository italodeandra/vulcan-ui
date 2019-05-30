import axios from 'axios';

var AutocompleteDataSource = function AutocompleteDataSource(endpoint, query) {
  var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  query = query || '';
  endpoint = typeof endpoint === 'string' ? endpoint : endpoint({
    query: query,
    page: page
  });
  return {
    get: function get() {
      return axios.get(endpoint);
    }
  };
};

export default AutocompleteDataSource;