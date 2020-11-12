import Link from 'next/link';
import {
    container as style_container,
    item as style_item
} from './index.module.css';

const _child = ({
    data,
    item,
    index,
    path
}) => {
    return <div
        className={style_item}
        style={{
            color: item.selected ? "goldenrod" : path === item.url ? "goldenrod" : "black"
        }}
    >
        {item.title}
        {
            data.length !== index+1 ?
                <span
                    style={{
                        marginLeft: 8,
                        marginRight: 8
                    }}
                >
                    /
                </span>
            :
                null
        }
    </div>
}

const Breadcrumbs = ({
    data,
    path
}) => {
    return <div
        className={style_container}
    >
        {
            data.map((item, index) => {
                if(item.url) {
                    return <Link
                        key={"breadcrumb"+index}
                        href={item.url}
                        style={{
                            color: item.selected ? "goldenrod" : path === item.url ? "goldenrod" : "black"
                        }}
                    >
                        {_child({
                            data,
                            item,
                            index,
                            path
                        })}
                    </Link>
                } else {
                    return _child({
                        data,
                        item,
                        index,
                        path
                    })
                }
            })
        }
    </div>
};
export default Breadcrumbs;