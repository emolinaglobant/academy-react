import NavBar from './NavBar';
export default function Home({data}) {
    return (
        <>
            <NavBar data={data}/>
            <main className="container__home">
            <h2>Welcome to the homepage!</h2>
            <p>You can do this, I believe in you.</p>
            </main>
        </>
    );
}