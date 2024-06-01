import { useAppSelector } from "@/redux/store";
import { useAppDispatch } from "@/redux/store";
import { setPage } from "@/redux/features/panel/panelSlice";
import { useGetUsers } from "../../panel-admin/users/_api/users";
import { usersType } from "src/types/UsersType";
interface PaginationProps {}

const Pagination: React.FunctionComponent<usersType> = (props) => {
  const {count_items_current_page,results,count_pages}=props

  
  const { currentPage} = useAppSelector((store) => store.panel);
  //const {data,isPending}=useGetUsers()
  const dispatch = useAppDispatch();
 // console.log(users);
  console.log(currentPage);
  //-------------------------------------------------------------------------------------------------------------------
  //const recordsPerPage=10;
  const lastIndex = currentPage * count_items_current_page;
  const firstIndex = lastIndex - count_items_current_page;
  //const npage=Math.ceil(+(users.total_items)/users.count_items_current_page);
  // console.log(npage);
  //const numbers:any=[Array.from((npage+1).keys())].slice(1)

  // console.log(numbers);
  let numbers = Array.from(
    { length: count_pages },
    (value, index) => index + 1
  );
  //console.log(users.length);
  console.log(numbers);
  //------------------------------------------------------------------------------------------------------------------

  const prePageHandler = () => {
    if (currentPage !== firstIndex) dispatch(setPage(currentPage - 1));
  };
  const nextPageHandler = () => {
    if (currentPage !== lastIndex) dispatch(setPage(currentPage + 1));
  };
  const changePageHandler = (n: number) => {
    dispatch(setPage(n));
  };

  return (
    <div dir="ltr" className="flex flex-col items-center mt-8 ">
      {/* <p className="text-sm text-gray-700">
        Showing
        <span className="font-medium">1</span>
        to
        <span className="font-medium">10</span>
        of
        <span className="font-medium">97</span>
        results
      </p> */}

      <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            {/* <p className="text-sm text-gray-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">10</span>
                of
                <span className="font-medium">97</span>
                results
              </p> */}
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={prePageHandler}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              {numbers.map((n, i) => (
                <a
                  href="#"
                  aria-current="page"
                  className={`
                ${
                  currentPage === n
                    ? `relative inline-flex items-center  px-4 py-2 text-sm font-semibold z-10 bg-[#1d3855] focus-visible:outline-[#1d3855] text-white focus:z-20  focus-visible:outline-2 focus-visible:outline-offset-2`
                    : `relative inline-flex items-center  px-4 py-2 text-sm font-semibold   text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`
                } `}
                  key={i}
                  onClick={() => changePageHandler(n)}
                >
                  {n}
                </a>
              ))}

              {/*               
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold "
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                10
              </a> */}
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={nextPageHandler}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
