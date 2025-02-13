import "./App.css";
import header_logo from "./assets/header_logo.svg";
import hero_img from "./assets/hero_img.svg";
import { ManageItem } from "./components/manage_items/manage";
import { ClientsItems } from "./components/clients_item/clients";
import logo from "./assets/footer_logo.svg";
import facebookIco from "./assets/footer_icon.svg";
import youtubeIco from "./assets/footer_icon2.svg";
import twitterIco from "./assets/footer_icon3.svg";
import pinterestIco from "./assets/footer_icon4.svg";
import instagramIco from "./assets/footer_icon5.svg";


function App() {
  return (
    <>
      <header className="main_header">
        <div className="container">
          <div className="header__block">
            <div className="header__img">
              <img src={header_logo} alt="Header Logo" />
            </div>
            <ul className="header__list">
              <li className="header__list">
                <a href="#" className="header__link">
                  Pricing
                </a>
              </li>
              <li className="header__list">
                <a href="#" className="header__link">
                  Product
                </a>
              </li>
              <li className="header__list">
                <a href="#" className="header__link">
                  About Us
                </a>
              </li>
              <li className="header__list">
                <a href="#" className="header__link">
                  Careers
                </a>
              </li>
              <li className="header__list">
                <a href="#" className="header__link">
                  Community
                </a>
              </li>
            </ul>
            <button className="header__btn btn">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__block">
              <div className="hero__content">
                <h2 className="hero__title">
                  Bring everyone together to build better products.
                </h2>
                <p className="hero__text">
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className="hero__btn btn">Get Started</button>
              </div>
              <div className="hero__img">
                <img src={hero_img} alt="hero img" />
              </div>
            </div>
          </div>
        </section>

        <section className="manage">
          <div className="container">
            <div className="manage__block">
              <div className="manage__content">
                <h2 className="manage__title">
                  What’s different about Manage?
                </h2>
                <p className="manage__text">
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.{" "}
                </p>
              </div>
              <ManageItem />
            </div>
          </div>
        </section>

        <section className="clients">
          <div className="container">
            <h2 className="clients__title">What they’ve said</h2>
            <div className="clients__block">
              <ClientsItems
                name={"Anisha Li"}
                text={
                  "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
                }
              />
              <ClientsItems
                name={"Ali Bravo"}
                text={
                  "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
                }
              />
            </div>
            <button className="clients__btn btn">Get Started</button>
          </div>
        </section>

        <section className="banner">
          <div className="container">
            <div className="banner__block">
              <h2 className="banner__title">
                Simplify how your team works today.
              </h2>
              <button className="banner__btn btn">Get Started</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
            <div className="container">
                <div className="footer__block">
                    <div className="footer__content1">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="footer__social-list">
                            <li className="footer__items">
                                <a href="https://facebook.com">
                                    <img
                                        src={facebookIco}
                                        alt="facebook icon"
                                    />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://youtube.com">
                                    <img src={youtubeIco} alt="youtube icon" />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://x.com">
                                    <img src={twitterIco} alt="twitter icon" />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://www.pinterest.com/">
                                    <img
                                        src={pinterestIco}
                                        alt="pinterest icon"
                                    />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://www.instagram.com/">
                                    <img
                                        src={instagramIco}
                                        alt="instagram icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content2">
                        <ul className="footer__list1">
                            <li className="footer__lists-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Pricing</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Products</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">About Us</a>
                            </li>
                        </ul>
                        <ul className="footer__list2">
                            <li className="footer__lists-item">
                                <a href="/">Careers</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Community</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content3">
                        <form className="footer__form_data">
                            <input
                                className="footer__search-input"
                                name="search"
                                type="email"
                                placeholder="Updates in your inbox…"
                                required
                            />
                            <button className="footer__seach_btn">Go</button>
                        </form>
                        <p className="footer__licence">

                        Copyright 2020. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}

export default App;
