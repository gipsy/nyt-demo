const API_KEY = '5763846de30d489aa867f0711e2b031c'

export default {
  name: 'extra-args',
  getExtraArgs: (store) => {
    return {
      apiNYT: (urlPath, query, page) =>
        // if your API requires an authentication token or whatnot
        // here would be a great place to select it from your store
        // and pass it along with the fetch. Then none of your individual
        // action creators need to worry about this.
        fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&type=article&api-key=${API_KEY}`,
          {
            credentials: 'same-origin',
            method: 'GET',
          },
        )
          .then((res) => res.json())
          .catch((err) => {
            // if you wanted to, you could look for errors caused
            // by failed authentication to trigger something
            // else on the store here if it existed. Such as redirecting
            // the user to a login page, or whatnot. You have access
            // to the store object itself.
            //
            // The store has all the action creators on it so you
            // can call `store.doWhatever()`
            // but for our purposes we'll just throw here
            throw err
          }),
    }
  },
}
