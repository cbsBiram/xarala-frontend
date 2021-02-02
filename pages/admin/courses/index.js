import { useQuery } from '@apollo/client'
import React from 'react'
import Courses from '../../../components/Dashboard/Courses'
import Loading from '../../../components/Shared/Loading'
import Admin from '../../../layouts/Admin'
import { ME_QUERY } from '../../../utils/constants'

const Index = () => {
  const { error, loading, data } = useQuery(ME_QUERY)
  const { me } = data ? data : []

  if (loading) return <Loading />

  return (
    <>
      <Courses user={me} />
    </>
  )
}

Index.layout = Admin

export default Index
