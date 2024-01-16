import { Container } from 'react-bootstrap';
import Header from '@layouts/Header.jsx';
import Footer from '@layouts/Footer.jsx';

function MainPage() {
	return (
		<>
			<Header />
			<main className="main">
				<Container />
			</main>
			<Footer />
		</>
	);
}

export default MainPage;
