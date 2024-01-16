import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Router, useLocation, useNavigate } from 'react-router-dom';
import LangSweatcher from '@components/LangSweatcher.jsx';

function Header() {
	const location = useLocation();
	const nav = useNavigate();
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
			data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="#home">Project-Brand</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link
							as={NavLink}
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? 'pending' : '',
									isActive ? 'active' : '',
									isTransitioning ? 'transitioning' : '',
								].join(' ')
							}
							to="/">
							Home
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link
							as={NavLink}
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? 'pending' : '',
									isActive ? 'active' : '',
									isTransitioning ? 'transitioning' : '',
								].join(' ')
							}
							to="/movies">
							Фильмы
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link
							as={NavLink}
							className={({ isActive, isPending, isTransitioning }) =>
								[
									isPending ? 'pending' : '',
									isActive ? 'active' : '',
									isTransitioning ? 'transitioning' : '',
								].join(' ')
							}
							to="/serials">
							Сериалы
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<LangSweatcher />
			</Container>
		</Navbar>
	);
}

export default Header;
