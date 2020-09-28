import React, {useEffect, useState} from 'react';

import {useListenerEffect, sendMessageToParent} from '../useIFrame';

function Remote() {
  const [message, updateMessage] = useState();

  const sendMessage = (data) => {
    sendMessageToParent(data);
  }

  useListenerEffect((message) => updateMessage(message))

  return <>
    <h1>Remote Application</h1>
    <h2>Message from Parent: {message}</h2>
    <input onChange={(e) => sendMessage(e.target.value)}/>
  </>
}

export default Remote;
