async function fetchData(link) {
    return fetch(link).then((response) => response.json()).then(responseJSON =>{return responseJSON});
  }

test("get data people", async ()=>{
    let data = await fetchData("https://swapi.dev/api/people");
    expect(data.results.length).toBeGreaterThan(0);
});
test("get data vehicles", async ()=>{
    let data = await fetchData("https://swapi.dev/api/vehicles");
    expect(data.results.length).toBeGreaterThan(0);
});
test("get data movies", async ()=>{
    let data = await fetchData("https://swapi.dev/api/films");
    expect(data.results.length).toBeGreaterThan(0);
});
test("get data planets", async ()=>{
    let data = await fetchData("https://swapi.dev/api/planets");
    expect(data.results.length).toBeGreaterThan(0);
});

