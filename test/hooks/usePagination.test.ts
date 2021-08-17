import { renderHook, act } from "@testing-library/react-hooks";
import dayjs from "dayjs";

import usePagination from "../../src/hooks/usePagination";

describe("Hooks|UsePagination", () => {
  it("Init", () => {
    const { result } = renderHook(() => usePagination<any>());

    expect(result.current.page).toEqual(0);
    expect(result.current.perPage).toEqual(100);
    expect(result.current.sortBy).toEqual("");
    expect(result.current.orderBy).toEqual("desc");
    expect(result.current.startDate.format("YYYY-MM-DD")).toEqual(
      dayjs().subtract(30, "days").format("YYYY-MM-DD")
    );
    expect(result.current.endDate.format("MM-DD")).toEqual(
      dayjs().format("MM-DD")
    );
  });

  it("Init with Object", () => {
    const { result } = renderHook(() => usePagination({}));

    expect(result.current.page).toEqual(0);
    expect(result.current.perPage).toEqual(100);
    expect(result.current.sortBy).toEqual("");
    expect(result.current.orderBy).toEqual("desc");
    expect(result.current.startDate.format("YYYY-MM-DD")).toEqual(
      dayjs().subtract(30, "days").format("YYYY-MM-DD")
    );
    expect(result.current.endDate.format("MM-DD")).toEqual(
      dayjs().format("MM-DD")
    );
  });

  it('onChangePagination("page")', () => {
    const { result } = renderHook(() => usePagination<any>());

    const nextPage = 3;
    act(() => {
      result.current.onChangePagination({
        page: nextPage,
      });
    });
    expect(result.current.page).toEqual(nextPage);
  });

  it('onChangePagination("perPage")', () => {
    const { result } = renderHook(() => usePagination<any>());

    const nextPerPage = 50;
    act(() => {
      result.current.onChangePagination({
        perPage: nextPerPage,
      });
    });
    expect(result.current.perPage).toEqual(nextPerPage);
  });

  it('onChangePagination("startDate")', () => {
    const { result } = renderHook(() => usePagination<any>());

    const nextStartDate = dayjs("2020-12-25");
    act(() => {
      result.current.onChangePagination({
        startDate: nextStartDate,
      });
    });
    expect(result.current.startDate).toStrictEqual(nextStartDate);
  });

  it('onChangePagination("endDate")', () => {
    const { result } = renderHook(() => usePagination<any>());

    const nextEndDate = dayjs("2020-12-25");
    act(() => {
      result.current.onChangePagination({
        endDate: nextEndDate,
      });
    });
    expect(result.current.endDate).toStrictEqual(nextEndDate);
  });

  it('onChangePagination("sortBy")', () => {
    const { result } = renderHook(() => usePagination<any>());

    act(() => {
      result.current.onChangePagination({
        sortBy: "id",
      });
    });
    expect(result.current.sortBy).toEqual("id");
    expect(result.current.orderBy).toEqual("desc");
    act(() => {
      result.current.onChangePagination({
        sortBy: "id",
      });
    });
    expect(result.current.sortBy).toEqual("id");
    expect(result.current.orderBy).toEqual("asc");
    act(() => {
      result.current.onChangePagination({
        sortBy: "id",
      });
    });
    expect(result.current.sortBy).toEqual("id");
    expect(result.current.orderBy).toEqual("desc");
    act(() => {
      result.current.onChangePagination({
        sortBy: "createdAt",
      });
    });
    expect(result.current.sortBy).toEqual("createdAt");
    expect(result.current.orderBy).toEqual("desc");
  });

  it("Reset", () => {
    const { result } = renderHook(() => usePagination<any>());

    act(() => {
      result.current.onChangePagination({
        page: 10,
      });
    });
    expect(result.current.page).toEqual(10);
    act(() => {
      result.current.resetPagination();
    });
    expect(result.current.page).toEqual(0);
  });
});
