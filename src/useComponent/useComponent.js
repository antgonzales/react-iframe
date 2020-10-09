import React, {Suspense, useRef, useState, useMemo, useEffect} from 'react';

export const useComponent = ({url, fallback}) => {
  const ref = useRef(null)
  const [LazyLoadedComponent, setComponent] = useState();

  const serializeMsg = (message) => JSON.parse(JSON.stringify(message));

  const sendMessage = (msg) => {
    const serializedMsg = serializeMsg(msg);
    ref.current.sendMessage(serializedMsg)
  }

  useEffect(() => {
    const Component = React.lazy(() => import(/* webpackIgnore: true */ url));
    setComponent(Component);
  }, []);

  const Component = useMemo(() => (props) => {
    const {onMessage, ...otherProps} = props;
    if (LazyLoadedComponent) {
      return <Suspense fallback={fallback}>
        <LazyLoadedComponent ref={ref}
          onMessage={(msg) => onMessage(serializeMsg(msg))} 
          {...otherProps}
        />
      </Suspense>;
    }
    return fallback;
  }, [ref, LazyLoadedComponent]);


  return {Component, sendMessage, node: ref};
}
