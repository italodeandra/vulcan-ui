import axios from 'axios'

const AutocompleteDataSource = (endpoint, query, page = 0) => {
    query = query || ''
    endpoint = typeof endpoint === 'string' ? endpoint : endpoint({ query, page })

    return {
        get: () => axios.get(endpoint)
    }
}

export default AutocompleteDataSource
