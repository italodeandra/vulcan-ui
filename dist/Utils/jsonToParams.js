function jsonToParams(url, data) {
  var dataClone = Object.assign({}, data);
  Object.keys(dataClone).forEach(function (key) {
    if (url.includes(':' + key)) {
      url = url.replace(':' + key, dataClone[key]);
      delete dataClone[key];
    }
  });
  return {
    url: url,
    data: dataClone
  };
}

export default jsonToParams;