const TYPE = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

/**
 * it will handle crud operation for expenses global State
 * @param {[]} state
 * @param {object} action
 */
export default function expensesReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    // will add a new expense object in the array (state)
    case TYPE.ADD: {
      return [...state, { ...payload, date: Date.now() }];
    }
    // will update one expense if is the same id
    case TYPE.UPDATE: {
      return state.map((expense) =>
        expense.id === payload.id ? payload : expense
      );
    }

    // it will delete a expense if the expense.id is equeal to payload
    case TYPE.DELETE: {
      return state.filter((expense) => expense.id !== payload);
    }
    default: {
      return state;
    }
  }
}

export { TYPE };
