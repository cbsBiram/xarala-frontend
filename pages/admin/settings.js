import React from 'react'

// components
import CardSettings from 'components/Cards/CardSettings.js'
import CardProfile from 'components/Cards/CardProfile.js'

import { ME_QUERY } from '../../utils/constants'
import { useQuery } from '@apollo/client'
import { withAuthSync } from '../../utils/auth'

const Settings = () => {
  const { loading, error, data } = useQuery(ME_QUERY)
  const { me } = data ? data : {}

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings me={me} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile me={me} />
        </div>
      </div>
    </>
  )
}

export default withAuthSync(Settings)
