# Optimizing React App with Hooks

This document explains how to use React hooks to optimize your application effectively. Below are the hooks and techniques utilized:

## 1. `useState`

- Manages local state in functional components.
- Example:

  ```jsx
  const [count, setCount] = useState(0);
  ```

## 2. `useCallback`

- Memoizes callback functions to prevent unnecessary re-creations.
- Useful when passing callbacks to child components.
- Example:

  ```jsx
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);
  ```

## 3. `useMemo`

- Memoizes expensive calculations to avoid re-computation.
- Example:

  ```jsx
  const computedValue = useMemo(() => {
    return heavyComputation(input);
  }, [input]);
  ```

## 4. `useDeferredValue`

- Defers updates to a value for better UI responsiveness.
- Example:

  ```jsx
  const deferredValue = useDeferredValue(value);
  ```

## 5. `memo`

- Prevents unnecessary re-renders of functional components.
- Example:

  ```jsx
  const MemoizedComponent = React.memo(MyComponent);
  ```

## 6. `lazy` and `Suspense`

- Enables code-splitting by lazy-loading components.
- Example:

  ```jsx
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  ```

  ```jsx
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
  ```

## 7. `ErrorBoundary`

- Catches JavaScript errors in components and displays fallback UI.
- Example:

  ```jsx
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
  ```

By combining these hooks and techniques, you can enhance the performance and maintainability of your React application.
