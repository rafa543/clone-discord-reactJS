import React from 'react'

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot}) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Rafael Araujo"/>

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot/>
      <UserRow nickname="Maria Julia"/>
      <UserRow nickname="Bruno "/>
      <UserRow nickname="Felipe Fernandes"/>
      <UserRow nickname="Maria Julia"/>
      <UserRow nickname="Bruno "/>
      <UserRow nickname="Felipe Fernandes"/>
      <UserRow nickname="Maria Julia"/>
      <UserRow nickname="Bruno "/>
      <UserRow nickname="Felipe Fernandes"/>
      <UserRow nickname="Bruno "/>
      <UserRow nickname="Felipe Fernandes"/>
      <UserRow nickname="Maria Julia"/>
      <UserRow nickname="Bruno "/>
      <UserRow nickname="Felipe Fernandes"/>
      <UserRow nickname="Maria Julia"/>
      <UserRow nickname="Bruno "/>
      <UserRow nickname="Felipe Fernandes"/>
    </Container>
  )
}

export default UserList