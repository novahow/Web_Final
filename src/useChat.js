import { useState, useEffect } from 'react'
import { useQuery, useMutation, useLazyQuery, useReactiveVar } from '@apollo/client'
import {
  USERS_QUERY,
  LOGIN_USERS_QUERY,
  CREATE_USER_MUTATION,
  CREATE_LOGIN_USER_MUTATION,
  MODIFY_USER_MUTATION,
  USERS_SUBSCRIPTION,
  LOGIN_USERS_SUBSCRIPTION,
  UPDATE_USER_POPULARITY_MUTATION,
} from './graphql'

const useChat = () => {
  const { loading: loading1, data: data1, subscribeToMore: subscribeToMore1 } = useQuery(USERS_QUERY)
  const { loading: loading2, data: data2, subscribeToMore: subscribeToMore2 } = useQuery(LOGIN_USERS_QUERY)
  //console.log(data)
  const [creatUser] = useMutation(CREATE_USER_MUTATION)
  const [createLoginUser] = useMutation(CREATE_LOGIN_USER_MUTATION)
  const [updateUserPopularity] = useMutation(UPDATE_USER_POPULARITY_MUTATION)
  const [modifyUser] = useMutation(MODIFY_USER_MUTATION)

  useEffect(() => {
    subscribeToMore1({
      document: USERS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newAllUsers = subscriptionData.data.user.data
        return {
          ...prev,
          users: [...prev.users, newAllUsers]
        }
      }
    })
  }, [subscribeToMore1])

  useEffect(() => {
    subscribeToMore2({
      document: LOGIN_USERS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newAllLoginUsers = subscriptionData.data.loginUser.data
        return {
          ...prev,
          loginUsers: [...prev.loginUsers, newAllLoginUsers]
        }
      }
    })
  }, [subscribeToMore2])

  const getUsers = async (reqdepartment) => {
    if (!reqdepartment || reqdepartment === "") return data1.users
    return data1.users.filter(({ department }) => department === reqdepartment)
  }
  const giveStars = async (data) => {
    const payload = await updateUserPopularity({
      variables: {
        id: data.id,
        stars: data.stars,
      }
    })
    return payload.data.updateUserPopularity
  }

  const modifyUserAttribute = async (user) => {
    const payload = await modifyUser({
      variables: {
        id: user.id,
        name: user.name,
        age: user.age,
        department: user.department,
        FB: user.FB,
        IG: user.IG,
        birthday: user.birthday,
        popularity: user.popularity,
        photo: user.photo,
        totalVoting: user.totalVoting,
        gender: user.gender,
      }
    })
    return payload.data.modifyUser
  }

  const addUser = async (user) => {
    const payload = creatUser({
      variables: {
        name: user.name,
        age: user.age,
        department: user.department,
        FB: user.FB,
        IG: user.IG,
        birthday: user.birthday,
        photo: user.photo,
        gender: user.gender,
      }
    })
    return payload
  }

  const checkLogin = async ({ name, passwd }) => {
    if (!name || !passwd) {
      return { state: "ERROR", data: null }
    }
    const loginUser = await data2.loginUsers.filter((loginuser) => loginuser.name === name && loginuser.passwd === passwd)
    if (loginUser.length !== 1) {
      return { state: "ERROR", data: null }
    }
    return { state: "SUCCESS", data: loginUser[0] }
  }
  const addLoginUser = async ({ name, passwd }) => {
    const payload = await createLoginUser({
      variables: {
        name: name,
        passwd: passwd,
      }
    })
    return { state: payload.data.createLoginUser.state, data: payload.data.createLoginUser.data }
  }
  return {
    getUsers,
    addUser,
    giveStars,
    addLoginUser,
    checkLogin,
    modifyUserAttribute,
  }
}

export default useChat