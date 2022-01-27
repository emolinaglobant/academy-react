function oddOrEven(array) {
    const sum = array.reduce((a, b) => a + b, 0)
    return (sum % 2 == 0 ? "even": "odd")
  }