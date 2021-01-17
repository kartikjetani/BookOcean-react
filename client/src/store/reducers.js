export function reducer(state,{type,payload}) {
    switch (type) {
      case "UPDATE_NAME":
        return {name:payload}

      case "UPDATE_BOOKDATA":
          return {bookdata:payload}

      default:
        return {name:undefined}
  }
}

