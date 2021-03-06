import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants:[], reviews: []}, action) {
  switch (action.type){
    case 'ADD_RESTAURANT':
      const restaurant=Object.assign({}, action.text, {id: cuidFn()});
      // return {restaurants: state.restaurants.concat(restaurant)};  this works but gets rid of reviews array and causes errors in feature
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)});
    
      case 'DELETE_RESTAURANT':
      const restaurants= state.restaurants.filter(restaurant => restaurant.id !== action.id);
      // return {restaurants} can't just return rests bc it over rides entrie state and gets ride of reviews
      return Object.assign({}, state, { restaurants });
      
      case 'ADD_REVIEW':
        const review = Object.assign({}, action.review, { id: cuidFn() });
        return Object.assign({}, state, {reviews: state.reviews.concat(review)});

      case 'DELETE_REVIEW':
        const reviews= state.reviews.filter(review => review.id !== action.id);
        return Object.assign({}, state, {reviews});

    default:
      return state;
  }

}