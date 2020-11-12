import { useEffect, useState } from 'react';
import Head from 'next/head';
import api from '../server';
import { API_KEY, HOST } from '../constants';
import {
	container as style_container,
	safeSpace as style_safeSpace,
	footerSpace as style_footerSpace
} from './index.module.css';
import Layout from '../layout';
import Welcome from '../components/welcome';
import Toolbox from '../components/toolbox';
import CardSlider from '../components/cardSlider';
import FilmCard from '../components/filmCard';
import {
	asyncForEach
} from '../helpers';
import { useGlobalState } from '../context';

const Home = () => {
	const [globalState, setGlobalState] = useGlobalState();
	const [popularFilms, setPopularFilms] = useState();
	const [err, setErr] = useState(null);
	const [toolBoxSearchValue, setToolBoxSearchValue] = useState("");
    const [year, setYear] = useState(null);
    const [type, setType] = useState(null);
    const search = () => {
        let mainParameters = {
			s: toolBoxSearchValue
        };
        if(type) mainParameters.type = type;
        if(year) mainParameters.y = year;
		const mainQuery = new URLSearchParams(mainParameters);
		window.location.href = "/search?" + mainQuery;
    }

	useEffect(() => {
		const mainParameters = {
			apikey: API_KEY,
			type: 'movie',
			r: 'json',
			s: 'abe' // Apinin imdb point üzerinde arama bölümü olmadığı için kendim salladım bu kısmı.
		};
		const mainQuery = new URLSearchParams(mainParameters);
		api({
			url: HOST + '?' + mainQuery
		})
		.then(async (res) => {
			if (res.Response === 'True') {
				let fullyData = [];
				await asyncForEach(res.Search, async (item) => {
					const itemParameters = {
						apikey: API_KEY,
						plot: 'short',
						type: 'movie',
						r: 'json',
						i: item.imdbID
					}
					const itemQuery = new URLSearchParams(itemParameters);
					const response = await api({
						url: HOST + '?' + itemQuery
					});
					let itemData = JSON.parse(JSON.stringify(response));
					fullyData.push(itemData);
				});
				setPopularFilms(fullyData);
			} else {
				setErr({
					message: res['Error']
				});
			}
		})
		.catch((err) => {
			alert(err.message);
		});
	}, []);
	return <Layout>
		<div className={style_container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<main>
				<Welcome
					title="Welcome to MovieUP."
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
					toolbox={<Toolbox
						button={{
							label: "Search",
							props: {
								variant: "contained",
								color: "primary",
								onClick: () => search()
							}
						}}
						search={{
							value: toolBoxSearchValue,
							onChange: (e) => setToolBoxSearchValue(e.target.value)
						}}
						year={{
							key: "toolboxYear",
							id: "dropdown-item-button",
							title: "Year",
							onChange: e => setYear(e.target.value),
							data: [
								{
									value: "Any",
									default: true
								},
								{
									value: "2019"
								},
								{
									value: "2020"
								}
							]
						}}
						type={{
							key: "toolboxType",
							id: "dropdown-item-button",
							title: "Type",
							onChange: e => setType(e.target.value),
							data: [
								{
									value: "Any",
									default: true
								},
								{
									value: "Series"
								},
								{
									value: "Movie"
								},
								{
									value: "Episode"
								}
							]
						}}
					/>}
				/>
				<div className={style_safeSpace}></div>
				{
					popularFilms && popularFilms.length ?
						<CardSlider
							title="Popular Movies"
						>
							{
								popularFilms.map((film, filmIndex) => {
									return <FilmCard
										imdbID={film.imdbID}
										index={filmIndex}
										title={film.Title}
										image={film.Poster}
										content={film.Plot}
										imdbPoint={film.imdbRating}
										key={"film-"+filmIndex}
										year={film.Year}
									/>
								})
							}
						</CardSlider>
					: err ? err.message : <div
						style={{
							width: "100%",
							paddingTop: 40,
							paddingBottom: 40,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontFamily: 'Poppins'
						}}
					>
						Yükleniyor...
					</div>
				}
				<div className={style_footerSpace}></div>
			</main>
		</div>
	</Layout>
}
export default Home;