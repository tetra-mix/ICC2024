
export const gnn = () => {
    fetch ("https://api.github.com/users/nnn112358")
    .then( (res) => {
        console.log(res);
        return res;
    })
    .catch(error => console.log(error));
}