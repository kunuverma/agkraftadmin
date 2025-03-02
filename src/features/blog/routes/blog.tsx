import { DataTable } from "../components/table/data-table";
import { columns } from "../components/table/column";
import { useEffect, useState } from "react";
import { usePagination } from "@/components/globalfiles/usePagination";
import { useDebounce } from "@/components/globalfiles/debounce";
import ErrorPage from "@/components/errorpage/error-page";
import { useGetBlogList } from "../components/api/api";

const BlogPageRoutes = () => {
  const { limit, onPaginationChange, page, pagination } = usePagination();
  const [keyword, setKeyword] = useState<string>("");
  const queryString = useDebounce(keyword, 500);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await useGetBlogList({
          page: page + 1,
          pageSize: limit,
          keyword: queryString,
        });
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
    };
    fetchData();
  }, [page, limit, queryString]);

  if (isError) {
    return <ErrorPage error={error} />;
  }
  return (
    <div className="p-3 text-[#ee6620] bg-[#F0EFF3] h-full flex flex-col gap-3 font-semibold">
      <div className="text-lg font-bold">Blog</div>
      <DataTable
        title="Blogs"
        columns={columns}
        data={data?.data || []}
        loading={isLoading}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
        pageCount={data?.totalPages}
      />
    </div>
  );
};

export default BlogPageRoutes;
