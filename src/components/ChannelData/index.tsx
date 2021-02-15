import React, { useRef, useEffect}from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage' 

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current
    if(div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container>
      <Messages ref={messageRef}>
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Como esta!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Rafael Araujo"
        date="21/06/2021"
        content="Bom dia!"
      />
      <ChannelMessage
        author="Diego Fernandes"
        date="21/06/2021"
        content={
          <>
            <Mention>@Rafael Araujo</Mention>, me adicione no Facebook.
          </>
        }
        hasMention
        isBot
      />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversa em chat-livre"/>
        <InputIcon/>
      </InputWrapper>
    </Container>
  )
}

export default ChannelData