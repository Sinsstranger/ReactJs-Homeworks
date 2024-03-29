import { IoIosSearch } from 'react-icons/io';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import LangSwitcher from '@components/LangSwitcher';
import PropTypes from 'prop-types';
import React, { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@reducers/slices/UserSlice';
import { useTranslation } from 'react-i18next';

function Header({ h1 }) {
	const [searchResults, setSearchResults] = useState([]);
	const movies = useSelector((state) => state.films.filmsList);
	const serials = useSelector((state) => state.serials.serialsList);
	const isAuth = useSelector((state) => state.user.isAuth);
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		setSearchResults([]);
		const query = e.target.value;
		const filterMoviesByTitle = (item) => {
			if (Object.prototype.hasOwnProperty.call(item, 'title')) {
				return query && item?.title.includes(query);
			}
			return query && item?.name.includes(query);
		};
		const foundedFilms = movies.films.filter(filterMoviesByTitle);
		const foundedSerials = serials.serials.filter(filterMoviesByTitle);
		const rawCollection = [];

		foundedFilms.forEach((item) =>
			rawCollection.push(
				<div>
					<Link
						key={item.id}
						to={`/movies/${item.id}`}>
						{item.title}
					</Link>
				</div>,
			),
		);
		foundedSerials.forEach((item) =>
			rawCollection.push(
				<div>
					<Link
						key={item.id}
						to={`/serials/${item.id}`}>
						{item.name}
					</Link>
				</div>,
			),
		);

		setSearchResults(rawCollection);
	};
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
					<Form.Group className="row me-2 align-items-center">
						<div className="col-sm-2">
							<IoIosSearch size={24} />
						</div>
						<div className="col-sm-10 g-0">
							<Form.Control onChange={handleSearch} />
							<div className="results">{searchResults}</div>
						</div>
					</Form.Group>
					<LangSwitcher />
					{!isAuth ? (
						<Button
							type="button"
							as={Link}
							to="/auth">
							Войти
						</Button>
					) : (
						<Button
							type="button"
							className="mx-2"
							onClick={() => dispatch(logout())}>
							Выход
						</Button>
					)}
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

export default memo(Header);
