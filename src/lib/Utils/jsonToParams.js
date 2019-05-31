function jsonToParams(url, data) {
    const dataClone = Object.assign({}, data)
    Object.keys(dataClone).forEach((key) => {
        if (url.includes(':' + key)) {
            url = url.replace(':' + key, dataClone[key])
            delete dataClone[key]
        }
    })

    return {
        url: url,
        data: dataClone
    }
}

export default jsonToParams
