import {
    useEffect,
    useState
} from 'react';
import {
    navigation
} from '../constants';
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    fas
} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GlobalState, {
    useGlobalState
} from '../context';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ecbb1d",
    },
    secondary: {
      main: "#ecbb1d",
    },
  },
});

import {
    container as style_container
} from './index.module.css';

library.add(fas);

const MyFavoritesUpdater = () => {
    const [globalState, setGlobalState] = useGlobalState();
    useEffect(() => {
        setGlobalState({
            myFavorites: JSON.parse(localStorage.getItem('myFavorites')),
            setFavoriteState: (imdbID) => {
                if(JSON.parse(localStorage.getItem("myFavorites"))) {
                    let myFavorites = JSON.parse(localStorage.getItem('myFavorites'));
                    if(myFavorites.findIndex(e => e === imdbID) === -1) {
                        myFavorites.push(imdbID);
                    } else {
                        myFavorites = myFavorites.filter(e => e !== imdbID);
                    }
                    localStorage.setItem("myFavorites", JSON.stringify(myFavorites));
                    setGlobalState({
                        myFavorites: myFavorites
                    });
                } else {
                    localStorage.setItem("myFavorites", JSON.stringify([imdbID]));
                    setGlobalState({
                        myFavorites: myFavorites
                    });
                }
            }
        });
    }, []);
    return null;
};

const Layout = ({ children }) => {
    const [searchValue, setSearchValue] = useState("");
    return <GlobalState>
        <MuiThemeProvider theme={theme}>
            <MyFavoritesUpdater/>
            <div className={style_container}>
                <Header
                    searchBox={{
                        searchValue: searchValue,
                        onChageSearchText: (e) => setSearchValue(e.target.value),
                        placeholder: "Enter movie name here",
                        icon: {
                            icon: "search",
                            size: "1x",
                            color: "#A4A4A4",
                            style: {
                            transform: "scale(1.3)"
                            }
                        }
                    }}
                    image={{
                        url: "/assets/images/logo.svg",
                        width: 150,
                        height: "auto"
                    }}
                    menu={{
                        key: "headerMenu",
                        data: navigation
                    }}
                    searchAction={() => {
                        window.location.href = "/search?s="+searchValue.toString();
                    }}
                />
                {children}
                <style jsx global>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                        @media (max-width: 600px) {
                            .grid {
                                width: 100%;
                                flex-direction: column;
                            }
                        }
                        * {
                            padding: 0;
                            margin: 0;
                        }
                        ::-webkit-scrollbar {
                            width: 8px;
                            height: 8px;
                        }
                        ::-webkit-scrollbar-button {
                            width: 0px;
                            height: 0px;
                        }
                        ::-webkit-scrollbar-thumb {
                            background: #e1e1e1;
                            border: 0px none #ffffff;
                            border-radius: 0px;
                        }
                        ::-webkit-scrollbar-thumb:hover {
                            background: #ecbb1d;
                        }
                        ::-webkit-scrollbar-thumb:active {
                            background: #aaaaaa;
                        }
                        ::-webkit-scrollbar-track {
                            background: #ecbb1d;
                            border: 0px none #ffffff;
                            border-radius: 0px;
                        }
                        ::-webkit-scrollbar-track:hover {
                            background: #ebebeb;
                        }
                        ::-webkit-scrollbar-track:active {
                            background: #464646;
                        }
                        ::-webkit-scrollbar-corner {
                            background: transparent;
                        }
                    `}
                </style>
            </div>
        </MuiThemeProvider>
    </GlobalState>
}
export default Layout;