import {
    container as style_container,
    table as style_table,
    content as style_content,
    contentText as style_contentText,
    title as style_tilte
} from './index.module.css';

const Welcome = ({
    content,
    title,
    toolbox
}) => {
    return <div
        className={style_container}
    >
        <div className={style_table}>
            <div className={style_content}>
                <span className={style_tilte}>
                    {title}
                </span>
                <p className={style_contentText}>
                    {content}
                </p>
                {toolbox}
            </div>
        </div>
    </div>
};
export default Welcome;