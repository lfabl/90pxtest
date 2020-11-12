import {
    Button,
    MenuItem,
    TextField
} from '@material-ui/core';
import {
    container as style_container,
    table as style_table,
    content as style_content
} from './index.module.css';

const Toolbox = ({
    year,
    type,
    search,
    button,
    position
}) => {
    return <div
        className={style_container}
    >
        <div className={style_table}>
            <div className={style_content} style={{
                position: position ? position : "absolute",
                width: position === "relative" ? "auto" : "100%",
                bottom: position === "relative" ? "initial" : "-135px"
            }}>
                {
                    year && year.data ?
                        <TextField
                            id={year.id}
                            label={year.title}
                            select
                            style={{
                                width: "20%"
                            }}
                            value={year.value}
                            onChange={year.onChange}
                        >
                            {
                                year.data.map((item, index) => {
                                    return <MenuItem
                                        key={year.key+index}
                                        value={item.value}
                                        {...item.props}
                                        
                                    >
                                        {item.value}
                                    </MenuItem>
                                })
                            }
                        </TextField>
                    :
                        null
                }
                {
                    type && type.data ?
                        <TextField
                            id={type.id}
                            label={type.title}
                            select
                            style={{
                                width: "20%"
                            }}
                            value={type.value}
                            onChange={type.onChange}
                        >
                            {
                                type.data.map((item, index) => {
                                    return <MenuItem
                                        key={type.key+index}
                                        value={item.value}
                                        {...item.props}
                                        
                                    >
                                        {item.value}
                                    </MenuItem>
                                })
                            }
                        </TextField>
                    :
                        null
                }
                {
                    search ?
                        <TextField
                            label="Movie Name"
                            value={search.value}
                            onChange={search.onChange}
                            {...search.props}
                            style={{
                                width: "45%"
                            }}
                            onKeyUp={(e) => {
                                if(e.keyCode === 13 && button && button.props && button.props.onClick) {
                                    button.props.onClick();
                                }
                            }}
                        />
                    :
                        null
                }
                {
                    button ?
                        <Button
                            {...button.props}
                            style={{
                                width: "9%",
                                marginTop: 10
                            }}
                        >
                            {button.label}
                        </Button>
                    :
                        null
                }
            </div>
        </div>
    </div>
};
export default Toolbox;