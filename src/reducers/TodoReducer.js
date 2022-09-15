function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state, //Statelerimin tamamını döndürüyorum
        todo: action.value,
      };

    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [
          ...state.todos, //Yine todoslarımın tamamı
          action.todo, //ek olarak actionın altındaki todolarımı ilave olarak içine ekle diyoruz.
          //SubmitHandle içinde yoruma aldığımız kısımları yazdık.
        ],
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.value,
      };

    default:
      break;
  }
}

export default reducer;
