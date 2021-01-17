import React  from 'react'
import GeneralHeader from '../../components/common/GeneralHeader'
import BannerOne from '../../components/banner/banner1/BannerOne'
import Testimonial from "../../components/sliders/Testimonial";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularCategories from "../../components/other/categories/PopularCategories";
import HowItWorkOne from "../../components/hiw/hiw1/HowItWorkOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import CtaOne from "../../components/other/cta/CtaOne";
import LatestBlog from "../../components/blogs/LatestBlog";
import Button from "../../components/common/Button";
import SectionDivider from "../../components/common/SectionDivider";
import InfoBox2 from "../../components/other/infoboxes/InfoBox2";
import PlaceOne from "../../components/places/PlaceOne";
import symble1 from '../../assets/images/symble1.png'
import symble2 from '../../assets/images/symble2.png'
import symble3 from '../../assets/images/symble3.png'
import symble4 from '../../assets/images/symble4.png'

import team1 from '../../assets/images/testi-img1.jpg';
import team2 from '../../assets/images/testi-img2.jpg';
import team3 from '../../assets/images/testi-img3.jpg';
import team4 from '../../assets/images/testi-img4.jpg';
import team5 from '../../assets/images/testi-img5.jpg';
import team6 from '../../assets/images/testi-img6.jpg';


const ctaimages = {
  images: [
    {
      img: symble1
    },
    {
      img: symble2
    },
    {
      img: symble3
    },
    {
      img: symble4
    }
  ]
}

const tmimages = {
  tmimage: [
    {
      tmimg: team1
    },
    {
      tmimg: team2
    },
    {
      tmimg: team3
    },
    {
      tmimg: team4
    },
    {
      tmimg: team5
    },
    {
      tmimg: team6
    }
  ]
}
const Home = () => {
  return (
    <main className="home-1">
      {/* Header */}
      <GeneralHeader />

      {/* Hero Banner */}
      <BannerOne />
      
      {/* How It Work */}
      <section className="hiw-area text-center padding-top-100px padding-bottom-110px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading title="サイトのPoint" desc="主に下記のことが出来ますので、是非活用してみて下さい！" />
          </div>

          <HowItWorkOne />
        </div>
      </section>

      {/* Popular Categories */}
      {/* <section className="cat-area padding-top-100px padding-bottom-90px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading title="注目のカテゴリー" desc="美容院の作品撮りが閲覧可能。写真をクリックで美容院を見る事も出来ます" />
          </div>
          <div className="row mt-5">
            <PopularCategories />
          </div>
        </div>
      </section> */}

      {/* Most Visited Place */}
      <section className="card-area text-center padding-bottom-100px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading title="閲覧数が多い店舗" desc="美容院の紹介ページの閲覧数が多い店舗を表示してます" />
          </div>

          <PlaceOne />
        </div>
      </section>

      {/* FunFacts */}
      {/* <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
        <div className="container">
          <div className="row section-title-width">
            <SectionsHeading title="Numbers Say Everything" titleClass="text-white" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
          </div>

          <FunFactsOne />
        </div>
      </section> */}

      {/* How It Word */}
      {/* <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading title="その他のサービス" desc="このサイト運営意外に、下記の様なサービスをしています" />
          </div>

          <InfoBox2 />
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
        {ctaimages.images.map((img, index) => {
            return (
                <img src={img.img} key={index} alt="Cta Symble" className="symble-img" />
            )
        })}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 text-left">
              <SectionsHeading title="Dirto is the best way to find & discover great local businesses" titleClass=" mb-3 font-size-28" descClass=" font-size-17" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero" />
            </div>

            <div className="col-lg-3">
              <div className="btn-box">
                <Button text="Create Account" url="/sign-up" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial */}
      <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
        {tmimages.tmimage.map((tmimg, index) => {
          return (
            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
          )
        })}
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading title="私たちの思い" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto mt-4">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Blog */}
      {/* <section className="blog-area padding-top-100px padding-bottom-80px">
        <div className="container">
          <div className="row section-title-width section-title-ml-mr-0">
            <div className="col-lg-8">
              <SectionsHeading title="Latest Tips & Articles" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
            </div>
            <div className="col-lg-4">
              <div className="btn-box h-100 d-flex align-items-center justify-content-end">
                <Button text="view all post" url="/blog-grid" className=" margin-top-100px" />
              </div>
            </div>
          </div>

          <LatestBlog />
        </div>
      </section> */}

      {/* CTA 2 */}
      {/* <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
        <CtaOne />
      </section> */}

      {/* Client Logo */}
      <ClientLogo />

      {/* NewsLetter */}
      {/* <NewsLetter /> */}

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  )
}

export default Home;