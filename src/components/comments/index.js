import React from 'react'


class Comments extends React.Component {

  constructor(props){
    super(props);
    this.comments = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement('script')
    script.setAttribute('id', 'utterance')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('repo', 'eiberham/abra.io')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('crossorigin', 'anonymous')
    this.comments.current.appendChild(script)
  }

  render() {
    return (
      <section id="comments" className="comments">
        <h1>Comments</h1>
        <div ref={this.comments} />
      </section>
    )
  }
}

export default Comments