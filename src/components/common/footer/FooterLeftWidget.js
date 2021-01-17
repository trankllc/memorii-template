import React, {Component} from 'react';
import Logo from "../Logo";
import SocialProfile from "../../other/account/SocialProfile";
import logosrc from '../../../assets/images/logo2.png'

class FooterLeftWidget extends Component {
    // TODO LOGO のスタイルを変える
    state = {
        logo: logosrc,
        desc: '私たちはこのサイト以外にもサービスを展開しています。ご依頼等あればご気軽にご連絡下さい。',
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <div className="logo">
                            <Logo url={this.state.logo} className="foot-logo" />
                            <p className="footer__desc">
                                {this.state.desc}
                            </p>
                            {/* <SocialProfile /> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterLeftWidget;