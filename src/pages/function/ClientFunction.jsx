

export function get(API){
    return fetch(API, {
        headers: {
        },
      })
        .then((result) => result.json());

}