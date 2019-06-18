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
export default DataLoad