import './contact.css'
import contactImage from '../../images/Group 247.png'

const Contact = () => {
  return (
    // <!-- Hero Info -->
    <main>
      <div class="contact--hero--info">
					<h1 class="contact--hero--info--title">Contact Us</h1>
					<p class="contact--hero--description">
						Have an enquiry or feedback for us? Fill out the form to
						reach out and contact our team
					</p>
				</div>
				{/* <!-- End of Hero Section --> */}

				{/* <!-- Beginning of Section --> */}
				<section class="contact">
					<div class="contact--content">
						<img src={contactImage} alt="" />

						{/* <!-- Beginning of Form --> */}
						<form class="contact--form" action="">
							<div class="form--title">
								<h3>Full name</h3>
								<input
									type="text"
									name="FullName"
									id=""
									placeholder="Doe team 48"
									/>
							</div>
							<div class="form--title">
								<h3>Email address</h3>
								<input type="email" id=""
									placeholder="doeteam@gmail.com" />
							</div>
							<div class="form--title">
								<h3>Message</h3>
								<textarea
									name=""
									id=""
									cols=""
									rows=""
									placeholder="Write a message"></textarea>
							</div>
							<button class="contact--form--btn">Send message</button>
						</form>
						{/* <!-- End of Form --> */}
					</div>
				</section>
				{/* <!-- --------End of section------- --> */}
    </main>
				
  )
}

export default Contact