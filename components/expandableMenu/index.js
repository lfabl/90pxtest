import {
    useEffect,
    useState
} from 'react';
import {
    container as style_container,
    menuItem as style_menuItem,
    menuIcon as style_menuIcon
} from './index.module.css';
import Link from 'next/link';
import Icon from '@material-ui/core/Icon';
import {
    MenuSharp
} from '@material-ui/icons/';

const ExpandableMenu = ({
    data,
    key,
    path,
    onUpdateMobileMenuState
}) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
    useEffect(() => {
        if(onUpdateMobileMenuState) onUpdateMobileMenuState(isOpenMobileMenu);
    }, [isOpenMobileMenu]);
    return <div className={style_container}>
        {
            data ?
                data.map((item, index) => {
                    return <Link
                        key={key+index}
                        href={item.url}
                    >
                        <span
                            className={style_menuItem}
                            style={{
                                color: path === item.url ? "#F5C518" : "#000000"
                            }}
                        >
                            {item.title}
                        </span>
                    </Link>
                })
            :
                null
        }
        <Icon
            color={isOpenMobileMenu ? "primary" : "dark"}
            component={MenuSharp}
            className={style_menuIcon}
            style={{
                fontSize: 32
            }}
            onClick={() => {
                setIsOpenMobileMenu(!isOpenMobileMenu);
            }}
        />
    </div>
};
export default ExpandableMenu;