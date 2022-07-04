import React, { useEffect, useState } from 'react'
import { IoIosMail, IoMdSad } from "react-icons/io";

import Layout from "../components/layout"

export default () => {
  const [ validated, setValidated ] = useState(false)
  useEffect(() => {
    (async () => {
      const host = process.env.GATSBY_APIGATEWAY_HOST
      const params = new URLSearchParams(window.location.search);
      const hash = params.get("h")
      const response = await fetch(`${host}/validate`, {
        method: 'post',
        body: JSON.stringify({ hash })
      })
      if (response.statusCode === 200) {
        setValidated(true)
      }
    })()
  }, [])

  return (
    <Layout>
      <section>
        {validated ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <IoIosMail size={'20em'} color="green" />
            <strong>Your email address has been verified.</strong>
            <span>Now every time a new article is up you'll get notified in your inbox.</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <IoMdSad size={'20em'} color="orange" />
            <strong>Something bad happened.</strong>
            <span>The link might be corrupt or just wrong.</span>
          </div>
        )}
      </section>
    </Layout>
  )
}