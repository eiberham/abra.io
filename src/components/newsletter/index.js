import React, { useState } from 'react'

import './styles.scss'

const Newsletter = () => {
  const [ email, setEmail ] = useState('')
  const host = process.env.GATSBY_APIGATEWAY_HOST
  const onEmailChange = (e) => setEmail(e.target.value)
  const isValid = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = { email }
      await fetch(`${host}/newsletter`, {
        method: 'post',
        body: JSON.stringify(data)
      })
      setEmail('')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <section className="newsletter">
      <form className="form" onSubmit={onSubmit}>
        <div className="container">
          <p className="container-text">
            If you want to get the latest content via email subscribe to the newsletter. <br />
            You can opt-out any time.
          </p>
          <div className="fieldset">
            <div>
              <input type="text" name="email" value={email} onChange={onEmailChange} required />
              <button type="submit" title="subscribe" disabled={!isValid(email)}>
                <span>Subscribe</span>
              </button>
            </div>
            {email && !isValid(email) && (
              <div className="error">The email format is incorrect</div>
            )}
          </div>
        </div>
      </form>
    </section>
  )
}

export default Newsletter