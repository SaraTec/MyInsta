const DataLoad = async () => {
    try {
        const response = await fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {
            method: 'GET'
        })
        if (response) {
            return response.json();
        }
    } catch (error) {
        console.log({ error });
    }
}

const DataDelete = (id) => {
    let Url = 'https://5b27755162e42b0014915662.mockapi.io/api/v1/posts' + `/${id}`;
    return fetch(Url, {
        method: 'DELETE'
    })
        .then(res => res.json());
};

const DataPost = (data) => {
    let Url = 'https://5b27755162e42b0014915662.mockapi.io/api/v1/posts';
    return fetch(Url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    })
        .then(res => res.json());
};


export { DataLoad }
export { DataDelete }
export { DataPost }
