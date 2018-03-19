import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

function food(state = {}, action) {
  switch(action.type) {
    case ADD_RECIPE:
      const { recipe } = action
      return {
        ...state,
        [recipe.label]: recipe
      }
    default:
      return state
  }
}

console.log(food)

const initialCalendarState = {
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null
  },
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null
  }
}

export default function calendar(state = initialCalendarState, action) {
  const { day, meal, recipe } = action

  switch(action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label
        }
      }
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      }
    default:
        return state
  }
}
