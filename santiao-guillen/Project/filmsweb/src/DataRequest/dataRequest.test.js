import { getFilm,getAllFilms,getRanking} from './index';
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";

// test for verify that the search

describe("test for the dataRequests function getFilm",() => {

    test("test for check this films have id", async () => {
        const films = await getFilm("hulk");
        films.results.forEach((film)=> {
            expect(film).toHaveProperty("id");
        })
    })


    test("test to check if title has value of hulk", async () => {
        const films = await getFilm("hulk");
        films.results.forEach((film)=> {
            expect(film.title.toLowerCase().includes("hulk")).toBeTruthy()
        })
    })

    test("test to check if title does not exist", async () => {
        const films = await getFilm("jaimedseas");
        expect(films.results).toHaveLength(0);
    })
})

// test for get all films 

describe("test for the dataRequest function getAllFilms",() => {

    test("check if all films is correct", async() => {
        const getFilms = await getAllFilms()
        expect(getFilms.results).toHaveLength(20)
    })

    test("verify that has the property poster" , async () => {
        const getFilms = await getAllFilms()
        getFilms.results.forEach((res) => {
            expect(res).toHaveProperty("poster_path");
        })
    })
})

describe("test for the dataRequest function getRanking", () => {

    test("should show data in table", async () => {

        const getRankings = await getRanking()
        expect(getRankings.results).toHaveLength(20);
    })


    test("verify that has the property vote_average" , async () => {
        const getRankings = await getRanking()
        getRankings.results.forEach((res) => {
            expect(res).toHaveProperty("vote_average");
        })
    })

})
