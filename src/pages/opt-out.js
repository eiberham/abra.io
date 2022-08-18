import React, { useState, useEffect } from 'react';
import { IoIosRocket } from 'react-icons/io'

import Layout from "../components/layout"

export default () => {
  const [ state, setState ] = useState ({
    loading: true,
    unsubscribed: false
  })
  const { loading, unsubscribed } = state
  const display = true // !loading && unsubscribed

  useEffect(() => {
    (async () => {
      const host = process.env.GATSBY_APIGATEWAY_HOST
      const params = new URLSearchParams(window.location.search);
      const hash = params.get("h")
      const response = await fetch(`${host}/opt-out`, {
        method: 'post',
        body: JSON.stringify({ hash })
      })
      if (response.statusCode === 200) {
        setState( state => ({
          ...state, loading: true, unsubscribed: true
        }))
        return
      }
      setState( state => ({ ...state, loading: false }))
    })()
  }, [])

  return (
    <Layout>
      <section>
        {display && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IoIosRocket size={'20em'} color="red" />
            <span><strong>You have opted-out succesfully</strong></span>
            <span>From now on you won't receive any further notifications</span>
          </div>
        )}
      </section>
    </Layout>
  )
}