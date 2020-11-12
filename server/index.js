const api = ({
    url,
    parameters,
    headers,
    method = "GET"
}) => {
    return new Promise((resolve, reject) => {
        fetch(
            url,
            {
                method,
                body: JSON.stringify(parameters),
                headers: headers
            }
        )
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    });
};
export default api;