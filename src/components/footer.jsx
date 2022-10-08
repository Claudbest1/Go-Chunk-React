import './footer.css'
import LogoFooter from '../images/LogoFooter.png'
import linkedin from '../images/entypo-social_linkedin-with-circle.png'
import twitter from '../images/ant-design_twitter-circle-filled.png'
import facebook from '../images/entypo-social_facebook-with-circle.png'
import youtube from '../images/entypo-social_youtube-with-circle.png'
import arrowDown from '../images/angle-down.svg'

const Footer = () => {
  return (
    <footer class="footer--container">
          {/* <!-- Top of Footer --> */}
          <div class="footer--top">
            <img class="footer--top--logo" src={LogoFooter} alt=""
              />
            <div class="footer--top--icons">
              <a href="" class="footer--top--social">
                <img src={linkedin}
                  alt="linkedin-icon"
                  class="footer--social--icon" />
              </a>
              <a href="" class="footer--top--social">
                <img src={twitter}
                  alt="twitter-icon" class="footer--social--icon" />
              </a>
              <a href="" class="footer--top--social">
                <img src={facebook}
                  alt="facebook-icon"
                  class="footer--social--icon" />
              </a>
              <a href="" class="footer--top--social">
                <img src={youtube}
                  alt="youtube-icon"
                  class="footer--social--icon" />
              </a>
            </div>
          </div>
          {/* <!-- End of Top of Footer --> */}
          {/* <!-- Middle of Footer --> */}
          <div class="footer--middle">
            <div class="footer--middle--links">
              <h3 class="footer--middle--links--title">Company <img
                  src={arrowDown} alt="arrow"
                  class="arrow--mobile"/></h3>
              <div class="underline"></div>
              <div class="footer--middle--link__grid">
                <a href="./home.html" class="footer--middle--link">Home</a>
                <a href="./about.html" class="footer--middle--link">About Us</a>
                <a href="./contact.html" class="footer--middle--link">Contact Us</a>
                <a href="#" class="footer--middle--link">Feedback</a>
              </div>
            </div>

            <div class="footer--middle--links">
              <h3 class="footer--middle--links--title">Splitter <img
                  src={arrowDown} alt="arrow"
                  class="arrow--mobile"/></h3>
              <div class="underline"></div>
              <div class="footer--middle--link__grid">
                <a href="./dashboard-split.html" class="footer--middle--link">Split
                  CSV file</a>
                <a href="./dashboard-split.html" class="footer--middle--link">Split
                  JSON file</a>
              </div>
            </div>

            <div class="footer--middle--links">
              <h3 class="footer--middle--links--title">Resources <img
                  src={arrowDown} alt="arrow"
                  class="arrow--mobile"/></h3>
              <div class="underline"></div>
              <div class="footer--middle--link__grid">
                <a href="./documentation_getting_started.html"
                  class="footer--middle--link">Documentation</a>
                <a href="#faq" class="footer--middle--link">FAQs</a>
              </div>
            </div>

            <div class="footer--middle--links">
              <h3 class="footer--middle--links--title">Account <img
              src={arrowDown} alt="arrow"
                  class="arrow--mobile"/></h3>
              <div class="underline"></div>
              <div class="footer--middle--link__grid">
                <a href="./dashboard-settings.html"
                  class="footer--middle--link">Profile</a>
                <a href="./dashboard-settings.html"
                  class="footer--middle--link">Settings</a>
              </div>
            </div>
          </div>
          {/* <!-- End of Middle of Footer --> */}
          {/* <!-- Bottom of Footer --> */}
          <div class="footer--bottom">
            <h4 class="footer--bottom--copyright">
              Copyright 2022. All Rights Reserved.
            </h4>
            <div class="footer--bottom--links">
              <a href="./privacy_new.html" class="footer--bottom--link">Privacy
                Policy</a>
              <a href="./t&c_new.html" class="footer--bottom--link">Terms and
                Conditions</a>
            </div>
          </div>
          {/* <!-- End of Bottom of Footer --> */}
        </footer>
  )
}

export default Footer