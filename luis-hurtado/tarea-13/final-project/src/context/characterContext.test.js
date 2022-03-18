async function fetchData(api) {
  return fetch(api)
    .then((response) => response.json())
    .then((responseJSON) => {
      return responseJSON;
    });
}

test("fetch rick and morty API url", async () => {
  let data = await fetchData("https://rickandmortyapi.com/api/character/");
  expect(data.results.length).toBeGreaterThan(0);
});
