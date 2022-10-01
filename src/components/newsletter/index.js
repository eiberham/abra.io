import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.success("Subscribed !")
      setEmail('')
    } catch (err) {
      console.error(err)
      toast.error("Could not subscribe")
      setEmail('')
    }
  }
  return (
    <div className="newsletter">
      <form className="form" onSubmit={onSubmit}>
        <div className="container">
          <p className="container-text">
            If you want to get the latest content via email subscribe to the newsletter. You can opt-out any time.
          </p>
          <div className="fieldset">
            <div>
              <input type="text" name="email" value={email} placeholder="address@domain.com" onChange={onEmailChange} required />
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
      <ToastContainer />
    </div>
  )
}

export default Newsletter