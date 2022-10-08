
import './home.css'
import '../faq/Faq'
import heroImg from './../../images/hero-img.png'
import chunkArrow from './../../images/Line 23.png'
import edit from './../../images/edit.png'
import upload from './../../images/upload.png'
import logout from './../../images/logout.png'
import CSV from './../../images/Group-1.png'
import JSON from './../../images/Group.png'
import split1 from './../../images/SPLIT ILLUSTRATION.png'
import split2 from './../../images/Group 301.png'
import split3 from './../../images/Group 213.png'
import IMG1 from './../../images/icon _login_.png'
import IMG2 from './../../images/icon _file earmark arrow up_.png'
import IMG3 from './../../images/icon _file group line_.png'
import IMG4 from './../../images/icon _file done_.png'
import IMG5 from './../../images/icon _file earmark arrow down_.png'
import Testifier from './../../images/Ellipse 44.png'



const Home = () => {
  return (
    // Beginning of Hero section 
    <main className='home'>
<header className='home__hero'>
      <div className="hero__info">
        <div className="hero__text">
          <h1>Split your data-files in the fastest and most secure way; at no cost!</h1>
          <h3>Upload, Split, Download or Save your data files for later.<br />All for FREE</h3>
          <button className='header__btn'>CHUNK FILES</button>
        </div>
        <img src={heroImg} alt="hero image" className='hero__img'/>
      </div>
    </header>
      {/* //End of Hero section */}
      
      {/* Chunk Steps */}
        <section class="home--chunk--description">
          <h1 class="home--chunk--title">
            Chunk your Data-files in three easy steps!
          </h1>
          <div class="home--chunk--steps__flex">
            <div class="home--chunk--steps">
              <img src={edit} alt="" />
              <h3>Sign Up</h3>
            </div>
            <img class="home--chunk--arrow" src={chunkArrow} alt=""
              />
            <div class="home--chunk--steps">
              <img src={upload} alt="" />
              <h3>Upload file</h3>
            </div>
            <img class="home--chunk--arrow" src={chunkArrow} alt=""
              />
            <div class="home--chunk--steps">
              <img src={logout} alt="" />
              <h3>Ready to Go</h3>
            </div>
          </div>
        </section>
      {/* End of Chunk Steps */}
      
      {/* About Section */}

       <section class="home--about">
          <h1 class="home--about--title">
            About <span>CSV/JSON</span> Data Formats
          </h1>
          <div class="home--about--description--flex">
            <div class="home--about--description">
              <div class="home---about--description--intro">
                <img class="home--about--icon" src={CSV}
                  alt="csv-icon" />
                <h2>CSV</h2>
              </div>
              <article class="home--about--text">
                <p>
                  A CSV file is a comma-separated values file commonly used by
                  spreadsheet programs such as Microsoft Excel or OpenOffice
                  Calc.
                  It contains plain text data sets separated by commas, with
                  each
                  new line in the CSV file representing a new database row and
                  each
                  database row consisting of one or more fields separated by a
                  comma.
                </p>
                <p>Many data reporting tools output to CSV format.</p>
              </article>
            </div>
            <div class="home--about--description">
              <div class="home---about--description--intro">
                <img class="home--about--icon" src={JSON}
                  alt="csv-icon" />
                <h2>JSON</h2>
              </div>
              <article class="home--about--text">
                <p>
                  A JSON file is a file that stores simple data structures and
                  objects in JavaScript Object Notation (JSON) format, which is
                  a
                  standard data interchange format. It is primarily used for
                  transmitting data between a web application and a server. JSON
                  files are lightweight, text-based, human-readable, and can be
                  edited using a text editor.
                </p>
                <p>From APIs to configuration files, JSON is now everywhere.</p>
              </article>
            </div>
          </div>
        </section>

      {/* End of About Section */}

      {/* Split section */}
       <section class="split">
          <h1 class="split--title">What We <span>Deliver</span></h1>
          {/* <!-- Split box --> */}
          <div class="split__flex">
            <article>
              <h2 class="split__flex--heading">SPLIT LARGE CSV OR JSON FILES</h2>
              <p class="split__flex--text">
                Are you having problems splitting your large CSV or JSON files?
                Upload your file on <span>Go-Chunk</span>, split and download in
                minutes.
              </p>
            </article>
            <img class="split--img" src={split1}
              alt="" />
          </div>
          {/* <!-- End of Split box--> */}
          {/* <!-- Split box --> */}
          <div class="split__flex">
            <article>
              <h2 class="split__flex--heading">SAVE NOW AND DOWNLOAD LATER</h2>
              <p class="split__flex--text">
                You can always manage your downloads on
                <span>Go-Chunk</span>. Select your own date and time and
                download
                whenever you are ready.
              </p>
            </article>
            <img class="split--img" src={split2} alt="" />
          </div>
          {/* <!-- End of Split box--> */}
          {/* <!-- Split box --> */}
          <div class="split__flex">
            <article>
              <h2 class="split__flex--heading">GUARANTEED SECURITY</h2>
              <p class="split__flex--text">
                With <span>Go-Chunk</span>, your privacy and security remains
                guaranteed. No one has access to your files.
              </p>
            </article>
            <img class="split--img" src={split3} alt="" />
          </div>
          {/* <!-- End of Split box--> */}
        </section>
      {/* End of split section */}

       {/* <!-- Instructions --> */}
        <section class="instruction">
          <h1 class="instruction--title">
            Start splitting files <span>in no time!</span>
          </h1>
          <p class="instruction--text">
            You don’t have to wait hours or days to get your files splitted.
            With
            Go-Chunk, you can do that in <span>minutes.</span>
          </p>
          <p class="instruction--text">How? The steps below are a quick guide.</p>
          {/* <!-- Instruction Step --> */}
          <div class="instruction--steps">
            <div class="instruction--steps__flex">
              <article>
                <h3>STEP 1: Register/Log In</h3>
                <p>
                  To get started, tap the “Register” button to get started on
                  your
                  free account or Log in to continue.
                </p>
              </article>
              <img src={IMG1} alt="login-icon" />
            </div>
            <div class="instruction--steps--underline"></div>
          </div>
          {/* <!-- End of Instruction Step --> */}
          {/* <!-- Instruction Step --> */}
          <div class="instruction--steps">
            <div class="instruction--steps__flex">
              <article>
                <h3>STEP 2: Select and Upload your files</h3>
                <p>
                  Select your files and upload it or drag and drop into the
                  ‘Upload File’ box to begin.
                </p>
              </article>
              <img src={IMG2}
                alt="login-icon" />
            </div>
            <div class="instruction--steps--underline"></div>
          </div>
          {/* <!-- End of Instruction Step --> */}
          {/* <!-- Instruction Step --> */}
          <div class="instruction--steps">
            <div class="instruction--steps__flex">
              <article>
                <h3>STEP 3: Choose chunk number and Split</h3>
                <p>
                  Choose the number of chunks you want your file to be splitted
                  into, and tap on ‘Split File’ button.
                </p>
              </article>
              <img src={IMG3}
                alt="login-icon" />
            </div>
            <div class="instruction--steps--underline"></div>
          </div>
          {/* <!-- End of Instruction Step --> */}
          {/* <!-- Instruction Step --> */}
          <div class="instruction--steps">
            <div class="instruction--steps__flex">
              <article>
                <h3>STEP 4: After splitting, Save your file</h3>
                <p>
                  Once your file has been splitted, you can Save it by tapping
                  the
                  ‘Save File’ button.
                </p>
              </article>
              <img src={IMG4} alt="login-icon" />
            </div>
            <div class="instruction--steps--underline"></div>
          </div>
          {/* <!-- End of Instruction Step --> */}
          {/* <!-- Instruction Step --> */}
          <div class="instruction--steps">
            <div class="instruction--steps__flex">
              <article>
                <h3>STEP 5: Click Download, to download your files</h3>
                <p>You can always come back to download your files later.</p>
              </article>
              <img src={IMG5}
                alt="login-icon" />
            </div>
            {/* <!-- <div class="instruction--steps--underline"></div> --> */}
          </div>
          {/* <!-- End of Instruction Step --> */}
        </section>
      {/* <!-- End of Instructions --> */}
      
         {/* <!-- Testimonials --> */}
        <section class="testimonials">
          <h2 class="testimonials--title">Testimonials</h2>
          <p class="testimonials--introduction">What our users have to say</p>
          <div class="testimonials__flex">
            <img class="testifier--img" src={Testifier}
              alt="user-img" />
            <article>
              <p class="testimonials--text">
                Go-Chunk does a good job by chunking large data files into bits
                in
                the fatest and secure way. The interface is well designed and
                seamless.
              </p>
              <p class="testimonials--name">Muhammed Salem</p>
              <p class="testimonials--role">Data Analyst</p>
            </article>
          </div>
        </section>
        {/* <!-- End of Testimonials --> */}

       {/* <!-- --------Beginning of FAQs---------------- --> */}
        <section class="faq" id="faq">
          <div class="faq-header-text">
            <h1>Frequently Asked<span id="faq-link">
                Questions</span>
            </h1>
            <h3>Need some clarity?</h3>
            <p>Below are some questions we
              often get and we
              have made your experience easier by
              answering them in a clear and precise way. <br/> If
              you can't find your
              question here, kindly <a href="../templates/contact.html"
                id="faq-link">Contact
                Us</a>
            </p>
          </div>
          {/* <!-- ------------Beginning of first box------------ --> */}
          <div class="question-box-container">
            <div id="question-box-1" class="question-box">
              <p class="asked-questions">Can i split more
                than 5 files at a
                time?</p>

              <button id="add-sign-1">+</button>
            </div>
            <div id="answer-box-1" class="answer-box">
              <div class="answer-question-box">
                <p>Can i split more than 5 files at a
                  time?</p>
                <button id="minus-sign-1">-</button>
              </div>

              <div class="answer-box-answer">
                <p>
                  GO-Chunk allows you to split just one
                  file at a time.
                </p>
              </div>
            </div>
            {/* <!-- -----End of first box------- --> */}
            {/* <!-- ---------Beginning of Second box-------------- --> */}
            <div id="question-box-2" class="question-box">
              <p class="asked-questions">How can I avoid having errors while
                splitting?</p>

              <button id="add-sign-2">+</button>
            </div>
            <div id="answer-box-2" class="answer-box">
              <div class="answer-question-box">
                <p>How can I avoid having errors while splitting?</p>
                <button id="minus-sign-2">-</button>
              </div>

              <div class="answer-box-answer">
                <p>
                  To avoid errors while splitting, make sure you select the
                  right format.
                </p>
              </div>
            </div>
            {/* <!-- ---------End of Second box-------------- --> */}
            {/* <!-- ---------Beginning of third box-------------- --> */}
            <div id="question-box-3" class="question-box">
              <p class="asked-questions">How safe are my files in case I lost my
                gadgets?</p>

              <button id="add-sign-3">+</button>
            </div>
            <div id="answer-box-3" class="answer-box">
              <div class="answer-question-box">
                <p>How safe are my files in case I lost my gadgets?</p>
                <button id="minus-sign-3">-</button>
              </div>

              <div class="answer-box-answer">
                <p>
                  Be rest assured that your files are safe with us and can be
                  collected without missing any data any time.
                </p>
              </div>
            </div>
            {/* <!-- ---------End of third box-------------- --> */}
            {/* <!-- ---------Beginning of Fourth box-------------- --> */}
            <div id="question-box-4" class="question-box">
              <p class="asked-questions">Will I be charged if I want to chunk
                into many numbers?</p>
              <button id="add-sign-4">+</button>
            </div>
            <div id="answer-box-4" class="answer-box">
              <div class="answer-question-box">
                <div class="answer-question">
                  <p>Will I be charged if I want to chunk into many numbers?</p>
                </div>
                <button id="minus-sign-4">-</button>
              </div>

              <div class="answer-box-answer">
                <p>
                  GO-Chunk is absolutely FREE! We want you to freely do your
                  chunking because your data are important to us.</p>
              </div>
              {/* <!-- ---------End of Fourth box-------------- --> */}
            </div>
          </div>
        </section>
        {/* <!-- ----End of FAQ--------- --> */}

    </main>
    
    
  )
}

export default Home