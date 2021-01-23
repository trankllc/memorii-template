import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingDetailsBreadcrumb from "./ListingDetailsBreadcrumb";
import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ModalVideo from "react-modal-video";
import GeneralMap from "../../components/contact/GeneralMap";
import ContactInfo from "../../components/contact/ContactInfo";
import CustomerFeedback from "../../components/sidebars/widgets/CustomerFeedback";
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
import ReviewFields from "../../components/contact/ReviewFields";
import PlaceOne from "../../components/places/PlaceOne";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import videoimg from "../../assets/images/img22.jpg";
import { FaAccessibleIcon, FaMoneyBill, FaTimes, FaTrain, FaWalking } from "react-icons/fa";

class ListingDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  contentstate = {
    descTitle: "説明",
    desc:
      "私達はこの店をなんでやってるかわかりません。ぜひ、打ってみてください！",
    featureTitle: "情報",
    videoTitle: "動画",
    flists: [
      {
        icon: <><FaMoneyBill />&nbsp;</>,
        title: "20万円〜30万円",
      },
      {
        icon: <><FaTrain />&nbsp;</>,
        title: <>東急東横線：渋谷駅 徒歩5分</>,
      },
      {
        icon: <><FaTrain style={{ visibility: 'hidden' }} />&nbsp;</>,
        title: <>東急東横線：渋谷駅 徒歩5分</>,
      },
	],
	insuranceTitle: "保険",
	insurance: [
		{
		  icon: <BsCheckCircle />,
		  title: "保険１",
		},
		{
		  icon: <BsCheckCircle />,
		  title: "保険２",
		},
		{
		  icon: <BsCheckCircle />,
		  title: "保険３",
		},
	  ],
	mapTitle: "地図",
    videoImg: videoimg,
    buttonText: "Watch Video",
    peopleViewtitle: "People Also Viewed",
  };
  render() {
    return (
      <main className="listing-details">
        {/* Header */}
        <GeneralHeader />

        {/* Breadcrumb */}
        <ListingDetailsBreadcrumb />

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="R2kiP9Qu7Pc"
          onClose={() => this.setState({ isOpen: false })}
        />
        <section className="single-listing-area padding-top-35px">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-listing-wrap">
                  <ListingDetailsGallery />

                  <div className="listing-description padding-top-40px padding-bottom-35px">
                    <h2 className="widget-title">
                      {this.contentstate.descTitle}
                    </h2>
                    <div className="title-shape"></div>
                    <div className="section-heading mt-4">
                      <p className="sec__desc font-size-16">
                        {this.contentstate.desc}
                      </p>
                    </div>
                  </div>

                  <div className="feature-listing padding-bottom-20px">
                    <h2 className="widget-title">
                      {this.contentstate.featureTitle}
                    </h2>
                    <div className="title-shape"></div>
                    <ul className="list-items mt-4">
                      {this.contentstate.flists.map((item, i) => {
                        return (
                          <li key={i}>
                            <i className="color-text font-size-18">
                              {item.icon}
                            </i>{" "}
                            {item.title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
				  
                  <div className="feature-listing padding-bottom-20px">
                    <h2 className="widget-title">
                      {this.contentstate.insuranceTitle}
                    </h2>
                    <div className="title-shape"></div>
                    <ul className="list-items mt-4" style={{ display: 'block' }}>
                      {this.contentstate.insurance.map((item, i) => {
                        return (
                          <li key={i}>
                            <i className="color-text font-size-18">
                              {item.icon}
                            </i>{" "}
                            {item.title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* <div className="video-listing padding-bottom-40px">
                    <h2 className="widget-title">
                      {this.contentstate.videoTitle}
                    </h2>
                    <div className="title-shape"></div>
                    <div className="video__box margin-top-35px text-center">
                      <img src={this.contentstate.videoImg} alt="video" />
                      <div className="video__box-content">
                        <span
                          className="mfp-iframe video-popup-btn video-play-btn"
                          onClick={this.openModal}
                          title="Play Video"
                        >
                          <span className="d-inline-block">
                            <AiOutlinePlayCircle />
                          </span>
                        </span>
                        <p className="video__desc">
                          {this.contentstate.buttonText}
                        </p>
                      </div>
                    </div>
                  </div> */}

                  <div className="listing-map gmaps">
                    <h2 className="widget-title">
                      {this.contentstate.mapTitle}
                    </h2>
                    <div className="title-shape margin-bottom-35px"></div>
                    <GeneralMap />
                  </div>
				  <br />

                  <ContactInfo />

                  {/* <CustomerFeedback /> */}

                  {/* <div className="comments-wrap">
                    <h2 className="widget-title">3 Reviews</h2>
                    <div className="title-shape"></div>
                    <ListingDetailsComments />
                  </div> */}

                  {/* <ReviewFields /> */}
                </div>
              </div>
              <div className="col-lg-4">
                <ListingDetailsSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="card-area padding-top-80px padding-bottom-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2 className="widget-title">
                    {this.contentstate.peopleViewtitle}
                  </h2>
                  <div className="title-shape"></div>
                </div>
              </div>
            </div>
            <PlaceOne />
          </div>
        </section> */}

        {/* Newsletter */}
        {/* <NewsLetter /> */}

        {/* Footer */}
        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default ListingDetails;
