import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LangSweatcher from '@components/LangSweatcher.jsx';
import PropTypes from 'prop-types';

function Header({ h1 }) {
	return (
		<header className="main-header">
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
								to="/evaluation">
								Оценить приложение
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<LangSweatcher />
				</Container>
			</Navbar>
			{h1 && (
				<Container>
					<h1 className="card-title">{h1}</h1>
				</Container>
			)}
		</header>
	);
}
Header.defaultProps = {
	h1: '',
};
Header.propTypes = {
	h1: PropTypes.string,
};

export default Header;
