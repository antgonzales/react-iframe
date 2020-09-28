import React, {useRef, useState, useEffect} from 'react';

import {useIFrame} from '../useIFrame';

function Home() {
  const [message, updateMessage] = useState();
  const {Component, sendMessage} = useIFrame({url: '/remote'})
  const onIframeMsgHandler = (data) => {
    updateMessage(data.message);
  }
  return <>
    <>
      <h1>Home Application</h1>
      <h2>Message from iFrame: {message}</h2>
      <input onChange={(e) => sendMessage(e.target.value)}/>
      <Component onMessage={onIframeMsgHandler} />
    </>
  </>;
}

export default Home;
