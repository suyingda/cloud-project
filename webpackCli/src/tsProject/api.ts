function request(query: any) {
    const url = query.url;
    // return fetch('http://example.com/movies.json')
    return fetch(url, {
        method: 'POST',
        mode: 'cors', // no-cors, cors, *same-origin
    }).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        // console.log(myJson);
        return new Promise((resolve, reject) => {
            resolve(myJson)
        })
    });
}

export default {
    updateList() {
        return request({
            url: 'http://172.20.4.230:8080/user',
            query: {}
        })
    }
}
