import { useQuery } from '@apollo/client'
import React from 'react'
import Posts from '../../../components/Dashboard/Posts'
import Loading from '../../../components/Shared/Loading'
import Admin from '../../../layouts/Admin'
import { ME_QUERY } from '../../../utils/constants'

const Index = () => {
  const { error, loading, data } = useQuery(ME_QUERY)
  const { me } = data ? data : []
  if (loading) return <Loading />

  return (
    <>
      <Posts user={me} />
    </>
  )
}

Index.layout = Admin
export default Index
