import {
    useEffect,
    useState
} from "react";
import Layout from "../../layout";
import Breadcrumbs from '../../components/breadcrumbs';
import Toolbox from "../../components/toolbox";
import {
    title as style_title
} from './index.module.css';
import {
    API_KEY,
    HOST
} from "../../constants";
import {
    asyncForEach, getUrlVars
} from "../../helpers";
import api from "../../server";
import FilmCard from "../../components/filmCard";

const Search = ({

}) => {
    const [path, setPath] = useState("/");
    const [searchText, setSearchText] = useState("");
    const [toolBoxSearchValue, setToolBoxSearchValue] = useState("");
    const [err, setErr] = useState(null);
    const [searchedFilms, setSearchedFilms] = useState([]);
    const [year, setYear] = useState(null);
    const [type, setType] = useState(null);
    const [updateSearch, setUpdateSearch] = useState(null);
    const search = ({
        s,
        type,
        y
    }) => {
        let mainParameters = {
			apikey: API_KEY,
			type: 'movie',
			r: 'json',
			s: s
        };
        if(type) mainParameters.type = type;
        if(y) mainParameters.y = y;
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
                setSearchedFilms(fullyData);
                setSearchText(s);
			} else {
				setErr({
					message: res['Error']
				});
			}
		})
		.catch((err) => {
			alert(err.message);
		});
    }
    useEffect(() => {
        setPath(window.location.pathname);
        const _searchJSON = getUrlVars(window.location.href);
        const _searchText = _searchJSON.s.replace("?s=", "").replace(/%20/g, " ");
        setSearchText(_searchText);
        let params = {
            s: _searchText
        };
        if(_searchJSON.type) {
            params.type = _searchJSON.type;
            setType(_searchJSON.type);
        }
        if(_searchJSON.y) {
            params.y = _searchJSON.y;
            setYear(_searchJSON.y);
        }
        search(params);
    }, []);
    useEffect(() => {
        setPath(window.location.pathname);
    });
    useEffect(() => {
        if(updateSearch) search(updateSearch);
    }, [updateSearch]);
    useEffect(() => {
        setUpdateSearch(null);
    }, [searchedFilms]);
    return <Layout>
        <Breadcrumbs
            data={[
                {
                    title: "Home",
                    url: "/"
                },
                {
                    title: "Search results for " + searchText.toString(),
                    selected: true
                }
            ]}
            path={path}
        />
        <div
            style={{
                width: "100%",
                display: "table",
                marginTop: 20,
                marginBottom: 40
            }}
        >
            <div
                style={{
                    display: "table-cell"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        paddingLeft: "10%",
                        paddingRight: "10%",
                    }}
                >
                    <Toolbox
                        position="relative"
                        button={{
                            label: "Search",
                            props: {
                                variant: "contained",
                                color: "primary",
                                onClick: () => {
                                    setUpdateSearch({
                                        s: toolBoxSearchValue,
                                        type: type,
                                        y: year
                                    });
                                }
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
                            value: year,
                            onChange: (event) => setYear(event.target.value),
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
                            value: type,
                            onChange: (event) => setType(event.target.value),
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
                    />
                </div>
            </div>
        </div>
        <h2
            className={style_title}
            style={{
                paddingRight: "10%",
                paddingLeft: "10%"
            }}
        >
            Search result for <span style={{ color: "goldenrod" }}>{searchText}</span>
        </h2>
        <div
            style={{
                paddingRight: "10%",
                paddingLeft: "10%",
                display: "flex",
                flexWrap: "wrap"
            }}
        >
            {
                searchedFilms && searchedFilms.length && updateSearch === null ?
                    searchedFilms.map((film, filmIndex) => {
                        return <FilmCard
                            imdbID={film.imdbID}
                            index={filmIndex}
                            title={film.Title}
                            image={film.Poster}
                            content={film.Plot}
                            imdbPoint={film.imdbRating}
                            key={"film-"+filmIndex}
                            year={film.Year}
                            direction="column"
                            style={{
                                marginLeft: 8,
                                marginRight: 8
                            }}
                        />
                    })
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
        </div>
    </Layout>
};
export default Search;