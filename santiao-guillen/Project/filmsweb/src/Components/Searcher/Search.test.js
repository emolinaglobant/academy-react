import "@testing-library/jest-dom/extend-expect";

test("btn search was pressed", () => {
    const btnPay = jest.fn();
    btnPay();
    expect(btnPay).toHaveBeenCalled();
})