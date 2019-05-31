import axios from 'axios'
import { jsonToParams, jsonToQueryString } from '../../index'

const AutocompleteDataSource = (request, query, page = 0) => {
    query = query || ''
    let url
    let method = 'get'
    let data
    let headers = {}

    if (typeof request === 'string') {
        url = request
    }

    if (typeof request === 'function') {
        url = request({ query, page })
    }

    if (typeof request === 'object') {
        url = request.url
        method = request.method || method
        data = typeof request.data !== 'function' ? request.data : request.data({ query, page })
        headers = request.headers

        if (method === 'get') {
            url = url + jsonToQueryString(data)
            data = null
        }
    }

    return {
        get: () => {
            const { url: newUrl, data: newData } = jsonToParams(url, data)

            const config = {
                url: newUrl,
                method,
                headers,
                data: newData
            }

            return axios(config)
        }
    }
}

export default AutocompleteDataSource
