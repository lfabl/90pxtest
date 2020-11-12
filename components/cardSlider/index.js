import {
    container as style_container,
    title as style_title
} from './index.module.css';
import Carousel from 'react-material-ui-carousel';

const CardSlider = ({
    title,
    next,
    prev,
    children
}) => {
    return <div
        className={style_container}
    >
        {
            <h3
                className={style_title}
            >
                {title}
            </h3>
        }
        <Carousel
            next={next}
            prev={prev}
        >
            {children}
        </Carousel>
    </div>
};
export default CardSlider;