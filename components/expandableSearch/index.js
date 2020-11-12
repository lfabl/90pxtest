import {
    container as style_container,
    content as style_content,
    searchbox as style_searchbox,
    searchIcon as style_searchIcon,
    inlineSearchIcon as style_inlineSearchIcon
} from './index.module.css';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import Icon from '@material-ui/core/Icon';
import {
    SearchSharp
} from '@material-ui/icons/';

const ExpandableSearch = ({
    icon,
    screenWidth,
    onClick,
    ...props
}) => {
    return <div
        className={style_container}
    >
       {
            screenWidth > 750 ?
                <div
                    className={style_content}
                >
                    <input
                        type="text"
                        className={style_searchbox}
                        onKeyUp={(e) => {
                            if(e.keyCode === 13) {
                                onClick();
                            }
                        }}
                        {...props}
                    />
                    {
                        icon ?
                            <FontAwesomeIcon
                                {...icon}
                                onClick={onClick}
                                className={style_inlineSearchIcon}
                            />
                        :
                            null
                    }
                </div>
            :
                null
       }
        <Icon
            color="dark"
            component={SearchSharp}
            className={style_searchIcon}
            style={{
                fontSize: 30
            }}
            onClick={onClick}
        />
    </div>
};
export default ExpandableSearch;