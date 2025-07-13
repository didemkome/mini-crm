import * as S from './Pagination.styled.ts';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages === 0) return null;

  const maxPageButtons = 7;
  let startPage = Math.max(currentPage - 3, 1);
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  if (endPage - startPage < maxPageButtons - 1) {
    startPage = Math.max(endPage - maxPageButtons + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  console.log('currentPage', currentPage, 'pages', pages);

  return (
    <S.Wrapper>
      <S.PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </S.PageButton>

      {startPage > 1 && (
        <>
          <S.PageButton onClick={() => onPageChange(1)}>1</S.PageButton>
          {startPage > 2 && <S.Ellipsis>...</S.Ellipsis>}
        </>
      )}

      {pages.map((page) => (
        <S.PageButton key={page} onClick={() => onPageChange(page)} $active={page === currentPage}>
          {page}
        </S.PageButton>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span>...</span>}
          <S.PageButton onClick={() => onPageChange(totalPages)}>{totalPages}</S.PageButton>
        </>
      )}

      <S.PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </S.PageButton>
    </S.Wrapper>
  );
};

export default Pagination;
