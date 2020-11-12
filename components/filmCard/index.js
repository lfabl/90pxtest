import { Button } from '@material-ui/core';
import { useGlobalState } from '../../context';
import {
    container as stlye_container,
    rightContainer as style_rightContainer,
    image as style_image,
    imdbRow as style_imdbRow,
    imdbStickerContainer as style_imdbStickerContainer,
    imdbSticker as style_imdbSticker,
    year as stlye_year,
    imdbPoint as style_imdbPoint
} from './index.module.css';

const FilmCard = ({
    title,
    imdbPoint,
    buttons,
    index,
    image,
    year,
    content,
    imdbID,
    style,
    direction
}) => {
    const [globalState, setGlobalState] = useGlobalState();
    const isFavorite = globalState.myFavorites.findIndex(e => e === imdbID) !== -1;
    const containerStyleForDirection = direction && direction === "column" ? {
        flexDirection: "column"
    } : {};
    const imdbStickerContainerForDirection = direction && direction === "column" ? {
        marginTop: "12px"
    } : {};
    return <div
        key={'films-' + index}
        className={stlye_container}
        style={{
            ...style,
            ...containerStyleForDirection
        }}
    >
        {
            image !== "N/A" ?
                <img
                    src={image}
                    height="200px"
                    className={style_image}
                    style={{
                        objectFit: direction && direction === "column" ? "contain" : "cover",
                        maxWidth: direction && direction === "column" ? "250px" : "auto"
                    }}
                />
            :
                null
        }
        <div
            className={style_rightContainer}
        >
            {
                imdbPoint || buttons ?
                    <div
                        className={style_imdbRow}
                    >
                        {
                            imdbPoint && imdbPoint !== "N/A" ?
                                <div
                                    className={style_imdbStickerContainer}
                                    style={{
                                        ...imdbStickerContainerForDirection
                                    }}
                                >
                                    <span
                                        className={style_imdbSticker}
                                    >
                                        IMDb
                                    </span>
                                    <span
                                        className={style_imdbPoint}
                                    >
                                        {imdbPoint}
                                    </span>
                                </div>
                            :
                                null
                        }
                        {
                            buttons ?
                                buttons
                            :
                                null
                        }
                    </div>
                :
                    null
            }
            <span
                className={stlye_year}
            >
                {year}
            </span>
            <h4
                style={{
                    maxWidth: direction && direction === "column" ? "250px" : "auto"
                }}
            >
                {title}
            </h4>
            <p
                style={{
                    maxWidth: direction && direction === "column" ? "250px" : "auto"
                }}
            >
                {content && content !== "N/A" ? content : null}
            </p>
            <Button
                variant={isFavorite ? "outlined": "contained"}
				color="primary"
                style={{
                    marginTop: 20
                }}
                onClick={() => globalState.setFavoriteState(imdbID)}
            >
                {isFavorite ? "Added to favorites" : "Add to favorites"}
            </Button>
        </div>
    </div>
};
export default FilmCard;