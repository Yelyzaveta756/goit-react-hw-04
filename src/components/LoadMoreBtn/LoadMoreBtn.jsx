import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
    return (
        <div className={css.containerMoreBtn}>
        <button className={css.loadMoreBtn} onClick={onClick}>Load more</button>
        </div>
    );
}