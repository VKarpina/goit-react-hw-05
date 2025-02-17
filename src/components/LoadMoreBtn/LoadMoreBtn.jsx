import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <div className={s.loadBtnContainer}>
      <button
        className={s.loadMoreBtn}
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
