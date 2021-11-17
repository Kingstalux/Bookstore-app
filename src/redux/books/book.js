const FETCH_BOOKS_BEGIN = 'bookStore/books/FETCH_BOOKS_BEGIN';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAILURE = 'bookStore/books/FETCH_BOOKS_FAILURE';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN,
});

const fetchBooksSuccess = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});

const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: { error },
});

const ApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j8JmvxHKftHERHKD19Nl/books/';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function deleteBooksApi(payload) {
  return (dispatch) => {
    dispatch(fetchBooksBegin());
    return fetch(ApiUrl + payload, {
      method: 'delete',
      body: JSON.stringify({
        item_id: payload,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(handleErrors)
      .then((res) => res.text())
      .then((json) => {
        if (json) {
          fetch(ApiUrl)
            .then(handleErrors)
            .then((res) => res.json())
            .then((json) => {
              dispatch(fetchBooksSuccess(json));
              return json;
            });
        }
      })
      .catch((error) => dispatch(fetchBooksFailure(error)));
  };
}

export function fetchBooks() {
  return (dispatch) => {
    dispatch(fetchBooksBegin());
    return fetch(ApiUrl)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchBooksSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchBooksFailure(error)));
  };
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        books: [],
      };

    default:
      return state;
  }
};

export default booksReducer;
