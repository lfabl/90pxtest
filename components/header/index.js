import {
    useEffect,
    useState
} from 'react';
import Link from 'next/link';
import ExpandableMenu from '../expandableMenu';
import ExpandableSearch from '../expandableSearch';

import {
    container as style_container,
    table as style_table,
    content as style_content,
    mobileMenuItem as style_mobileMenuItem
} from './index.module.css';

const HeaderMenu = ({
    image,
    searchBox,
    searchAction,
    menu
}) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    const [path, setPath] = useState("/");
    const [screenWidth, setScreenWidth] = useState(0);
    const handleResize = (e) => {
        setScreenWidth(window.innerWidth);
    }
    useEffect(() => {
        setPath(window.location.pathname);
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.addEventListener("resize", handleResize);
        }
    }, []);
    return <div className={style_container}>
        <div className={style_table}>
            <div className={style_content}>
                <img
                    src={image.url}
                    width={image.width}
                    height={image.height ? image.height : "auto"}
                />
                <ExpandableMenu
                    key={menu.key}
                    data={menu.data}
                    path={path}
                    onUpdateMobileMenuState={(e) => setIsOpenMobileMenu(e)}
                />
                <ExpandableSearch
                    value={searchBox.searchValue}
                    onChange={searchBox.onChageSearchText}
                    placeholder={searchBox.placeholder}
                    icon={searchBox.icon}
                    setIsOpenMobileMenu={setIsOpenMobileMenu}
                    screenWidth={screenWidth}
                    onClick={searchAction}
                />
            </div>
            {
                 isOpenMobileMenu ?
                    <div>
                        {
                            menu.data.map((item, index) => {
                                return <Link
                                    key={"mobileMenu"+index}
                                    href={item.url}
                                >
                                    <div
                                        className={style_mobileMenuItem}
                                        style={{
                                            color: item.url === path ? 'goldenrod' : "black"
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                :
                    null
            }
        </div>
    </div>
};
export default HeaderMenu;