import Nav from './navbar';
export default function Home() {
    return (
        <>
            <Nav/>
            <main className="container__home">
            <h2>Welcome to the homepage!</h2>
            <p>You can do this, I believe in you.</p>
            </main>
        </>
    );
}