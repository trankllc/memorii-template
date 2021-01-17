import React, {Component} from 'react';
import {FiMap, FiMail} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'

class InfoBoxOne extends Component {
  states = {
    items: [
      {
        id: '1',
        icon: <FiMap />,
        title: '簡単な検索',
        description: '希望のエリアや美容院の作品撮り/店内の雰囲気、給料などを簡単に指定して検索出来ます'
      },
      {
        id: '2',
        icon: <FiMail />,
        title: '直接質問可能',
        description: '美容院の紹介ページから直接質問可能。更に、他の人の質問/美容院の受け答えなども閲覧出来ます'
      },
      {
        id: '3',
        icon: <AiOutlineUser />,
        title: 'スタイルから選ぶ',
        description: '美容院の店内/作品撮りなどの掲載、作品撮りから検索が可能なので条件かではなく雰囲気から選べます'
      }
    ]
  }
  render() {
    return (
      <>
        {this.states.items.map(item => {
          return (
            <div className="col-lg-4 column-td-6" key={item.id}>
              <div className="icon-box">
                <div className="info-icon">
                  {item.icon}
                  <span className="info-number">{item.id}</span>
                </div>
                <div className="info-content">
                  <h4 className="info__title">
                    {item.title}
                  </h4>
                  <p className="info__desc">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </>
    );
  }
}

export default InfoBoxOne;