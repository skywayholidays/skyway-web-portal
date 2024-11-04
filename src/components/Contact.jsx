import contact from '../assets/images/contact.jpg';
import aboutCard from  '../assets/images/aboutCard.jpg';
import { ContactForm } from '.';

export default function ContactUs() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Banner Section */}
        <div className="relative h-64 md:h-96">
          <img
            src={contact}
            alt="Travel banner"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">CONTACT US</h1>
            <div className="text-sm md:text-base">
              <a href="/" className="hover:underline">Home</a>
              <span className="mx-2">/</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 flex flex-col justify-center md:flex-row gap-8 text">
            <div>
                <h1 className='text-3xl font-bold py-10 text-green_1'>Our Office</h1>
                <h1 className='text-2xl font-semibold pt-5 text-green_1'>Address:</h1>
                <p className='text-black_3 text-lg'>205/B-1, Plaza at 106, Sector-106, Gurgaon (122006) India</p>
                <h1 className='text-2xl font-semibold pt-5 text-green_1'>Phone No:</h1>
                <p className='text-black_3 text-lg'>(+91) 95601 99201</p>
                <h1 className='text-2xl font-semibold pt-5 text-green_1'>Email:</h1>
                <p className='text-black_3 text-lg'>skywayholidays106@gmail.com</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold py-10 text-green_1'>Contact</h1>
            <ContactForm/>
            </div>
           
            
        </div>
      </div>
    )
  }