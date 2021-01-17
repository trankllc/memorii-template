import React, {Component} from 'react';

class FooterQuickLinkWidget extends Component {
  state = {
    title: 'Quick Links',
    links: [
      // {
      //   path: '/contact',
      //   text: 'コンタクト'
      // },
      // {
      //   path: '/contact',
      //   text: '検索'
      // },
      // {
      //   path: '/about',
      //   text: '私たちについて'
      // },
      // {
      //   path: '/sign-up',
      //   text: '会員登録'
      // },
      // {
      //   path: '/login',
      //   text: 'ログイン'
      // },
      // {
      //   path: '/add-listing/new',
      //   text: 'add listing'
      // },
      // {
      //   path: '/pricing',
      //   text: 'pricing'
      // }
    ]
  }
  render() {
    return (
      <>
        <div className="col-lg-3 column-td-6">
          <div className="footer-item">
            <h4 className="footer__title">
              {this.state.title}
            </h4>
            <ul className="list-items">
              {this.state.links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.path}>{link.text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default FooterQuickLinkWidget;