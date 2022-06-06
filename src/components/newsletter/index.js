import React from 'react'

import './styles.scss'

const Newsletter = () => {
  return (
    <section className="newsletter">
      <form>
        <div className="container">
          <div className="container-text">
            <i className="com-icon icon-email">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20  7.238L12.7342 13.745C12.3565 14.0832 11.7856 14.0853 11.4054 13.7499L4 7.216V19H20V7.238ZM4.511 5L12.061 11.662L19.502 5H4.511Z" fill="#272727"></path></svg>
            </i>
            <h4 className="com-title --l">
              Don't miss out. <br />If you want to get the latest content via email subscribe to the <mark className="hl_underline">newsletter</mark>
            </h4>
          </div>
          <div className="container-button">
            <input type="text" />
            <button type="submit" title="Suscribite al Newsletter" className="com-button --primary">
              <span className="com-text --fivexs">Subscribe</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Newsletter