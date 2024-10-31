import about from '../assets/images/about.jpg';
import aboutCard from  '../assets/images/aboutCard.jpg';

export default function AboutUs() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Banner Section */}
        <div className="relative h-64 md:h-96">
          <img
            src={about}
            alt="Travel banner"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">ABOUT US</h1>
            <div className="text-sm md:text-base">
              <a href="/" className="hover:underline">Home</a>
              <span className="mx-2">/</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 flex flex-col justify-center md:flex-row gap-8 text-black_3 text">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-4 max-w-lg">
            <p>
              <b>Skyway Holidays</b>, a global travel organization, offers a full range of Travel
              Management Service in both Corporate & Leisure Travel, specializing in designing
              tailor made luxury holidays and offering the best and most Personalized services to its
              valued customers.
            </p>
            <p>
              Conceived with the idea of <b>"Great Value for Money" </b>, we promise to serve Our
              customers with a bouquet of most unique and Value for Money Holiday Options both in
              India as well as abroad.
            </p>
            <p>
              We excel because we maintain a high level of personal attention - Customer
              satisfaction being our prime motto.
            </p>
            <p>
              We believe in Holiday being a true memorable experience, hence we dedicate
              ourselves to providing the highest standards of service to our clients.
            </p>
            <p>
              Unlike some, who prefer to remain suppliers, we believe in forging long term
              association with our esteemed clients, which puts us in the unique position of offering
              you the best and the most memorable holiday experiences.
            </p>
            <p>
              Our Mission is to be one stop solution provider for all your Holiday needs with
              commitment to excellence and quality.
            </p>
          </div>
  
          {/* Image */}
          <div className="md:w-1/3">
            <img
              src={aboutCard}
              alt="Travel illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    )
  }