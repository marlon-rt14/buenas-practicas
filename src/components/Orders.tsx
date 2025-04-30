import React, { memo, useDeferredValue, useEffect, useMemo, useState, useTransition } from "react";
import { SIZE_LIST } from "../constantes/common";
import { IList } from "../pages/Lists";

const DATA = new Array(SIZE_LIST).fill(0).map((_, index) => {
  return {
    id: index.toString(),
    name: `Order ${index}`,
  };
});

export interface IPropsOrders {
  increment?: () => void;
  search?: string;
}
const Orders = memo(({ increment, search = "" }: IPropsOrders) => {
  console.log("Rendering Orders");

  const [isPending, startTransition] = useTransition();
  const [filteredData, setFilteredData] = useState<IList[]>([]);

  const deferFilteredData = useDeferredValue(filteredData);

  const incrementCounter = () => {
    increment?.();
  };

  // En este caso no tiene sentido usar useMemo, porque sus valores cambian en cada render
  // cuando actualizamos search. Asi que ya sea con useMemo o sin usarlo, el resultado es el mismo
  // Memoiza el resultado del filtrado
  const filteredDataMemoized = useMemo(() => {
    return DATA.filter((item) => item.name.includes(search));
  }, [search]);

  useEffect(() => {
    // Usa startTransition para diferir la actualización del estado
    startTransition(() => {
      setFilteredData(filteredDataMemoized);
    });
  }, [filteredDataMemoized]);

  return (
    <>
      <h2>Orders List</h2>
      <button onClick={incrementCounter}>Increment</button>
      <ul>{isPending ? "CARGANDO TRANSITION..." : deferFilteredData.map((item, index) => <li key={index}>{item.name}</li>)}</ul>
    </>
  );
});

export default Orders;
