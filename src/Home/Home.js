import React, {useRef, useState, useEffect, Suspense} from 'react';

import {useIFrame} from '../useIFrame';
import {useComponent} from '../useComponent';
import {ErrorBoundary} from '../ErrorBoundary';

function Home() {
  const [message, updateMessage] = useState('');
  const {Component, sendMessage, node} = useComponent({url: 'http://localhost:3000/otherComponent.esm.js', fallback: <div>Loading...</div>})
  const onMessageHandler = (e) => {
    updateMessage(e.data);
  }

  return <>
    <h1>Home Application</h1>
    <p>Message from child: {message}</p>
    <input onChange={(e) => sendMessage({type: 'TEXT_CHANGE', data: e.target.value})} />
    <ErrorBoundary fallback={<h1>Whoops, something went wrong.</h1>}>
      <Component onMessage={onMessageHandler} />
    </ErrorBoundary>
  </>;
}

export default Home;
