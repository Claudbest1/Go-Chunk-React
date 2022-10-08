import './faq.css'

const Faq = () => {
  return (
    <main>

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

export default Faq