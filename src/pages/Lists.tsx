import { lazy, memo, Suspense, useCallback, useDeferredValue, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { IPropsOrders } from "../components/Orders";
import ErrorFallback from "../components/ErrorBoundary";

export interface IList {
  id: string;
  name: string;
}

const LazyUsers = lazy(() => import("../components/Users"));
const LazyProducts = lazy(() => import("../components/Products"));
const LazyOrders = lazy(() => import("../components/Orders"));

const MemoizedLazyUsers = memo(LazyUsers);
const MemoizedLazyProducts = memo(LazyProducts);
// const MemoizedLazyOrders = memo(LazyOrders);

interface IPropsRenderList {
  selectedList: IList;
  orderProps?: IPropsOrders;
}

const renderList = ({ selectedList, orderProps }: IPropsRenderList) => {
  switch (selectedList.id) {
    case "users":
      return <MemoizedLazyUsers />;
    case "products":
      return <MemoizedLazyProducts />;
    case "orders":
      return <LazyOrders {...orderProps} />;
    default:
      return <div>No se ha seleccionado ninguna lista</div>;
  }
};

function Lists() {
  const [selectedList, setSelectedList] = useState<IList>({ id: "users", name: "Users" });
  const deferSelectedList = useDeferredValue(selectedList);

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const showUsers = () => setSelectedList({ id: "users", name: "Users" });

  const showProducts = () => setSelectedList({ id: "products", name: "Products" });

  const showOrders = () => setSelectedList({ id: "orders", name: "Orders" });

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>
        <h1>Mi Aplicación</h1>

        <div>
          <button onClick={increment}>Increment</button>
          <div>{count}</div>
        </div>

        <div>
          <button onClick={showUsers}>Users</button>
          <button onClick={showProducts}>Products</button>
          <button onClick={showOrders}>Orders</button>
        </div>
        <br />
        <div>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button
            onClick={() => {
              throw new Error("Error en la busqueda");
            }}
          >
            Throw Error
          </button>
        </div>

        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[deferSelectedList]}>
          <Suspense fallback={<div>Cargando componente lento...</div>}>
            {renderList({ selectedList: deferSelectedList, orderProps: { increment, search } })}
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default Lists;
