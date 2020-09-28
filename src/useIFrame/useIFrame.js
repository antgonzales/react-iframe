import React, {useState, useRef, useCallback, useMemo, useReducer, useEffect} from 'react';
import 'iframe-resizer/js/iframeResizer.contentWindow.js';

import IframeResizer from 'iframe-resizer-react'

export const useIFrame = ({url}) => {
  const ref = useRef(null)

  const sendMessage = (data) => {
    ref.current.sendMessage(data)
  }

  const Component = useMemo(() => (props) =>
    <IframeResizer
      forwardRef={ref}
      src={url}
      width="100%"
      onMessage={props.onMessage}
    />, [ref]);


  return {Component, sendMessage};
}

export const useListenerEffect = (listener) => {
  useEffect(() => {
    window.iFrameResizer = {
      onMessage: function(message) {
        listener(message);
      }
    }
    return () => {
      window.iFrameResizer.removeListeners();
    }
  }, [])
};

export const sendMessageToParent = (data) => {
  if ('parentIFrame' in window) {
    window.parentIFrame.sendMessage(data);
  }
}
