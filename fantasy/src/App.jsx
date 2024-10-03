
import './App.css';
import { useState, useRef } from 'react';
import RegistrationForm from './Forma/Forma.jsx';
import Registration from './Registration/Registration.jsx';
import { FcLock, FcSearch, FcOk, FcSpeaker, FcInvite, FcBusinesswoman, FcSelfServiceKiosk } from 'react-icons/fc';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { GiIceSkate } from 'react-icons/gi';
import Pic from '../public/pic.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pic1 from '../public/pic1.webp';
import Pic2 from '../public/pic2.webp';
import Pic3 from '../public/pic3.webp';
import Pic4 from '../public/pic4.webp';
import Pic5 from '../public/pic5.webp';
import Pic6 from '../public/pic6.webp';
import Pic7 from '../public/pic7.webp';
import Pic8 from '../public/pic8.webp';
import Pic9 from '../public/pic9.webp';
import Pic10 from '../public/pic10.webp';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function App() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const registrationRef = useRef(null);

  // Функція для плавного прокручування до реєстрації
  const scrollToRegistration = () => {
    registrationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Функція для показу форми логіну
  const handleLoginClick = () => {
    setIsLoginFormVisible(true);
    setIsRegistrationVisible(false);
    scrollToRegistration();
  };

  // Функція для показу форми реєстрації
  const handleJoinClick = () => {
    setIsLoginFormVisible(false);
    setIsRegistrationVisible(true);
    scrollToRegistration();
  };

  return (
    <div className='app'>
      <section className='fantasy'>
        <div className='text'>
          <h1 className='text__title'>It’s a hot place for your streaming fantasy.</h1>
          <h3>It’s a free space for watching streams and chatting with alluring people.</h3>
        </div>
        <button type='button' className='btn' onClick={handleLoginClick}>
          Log in
        </button>

        {isLoginFormVisible && <RegistrationForm />}
        {isRegistrationVisible && <div ref={registrationRef}><Registration /></div>}
      </section>

      <section className='slide'>
        <Swiper
          spaceBetween={450}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide><img src={Pic1} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src={Pic2} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src={Pic3} alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src={Pic4} alt="Slide 4" /></SwiperSlide>
        </Swiper>
      </section>
      <section className='slide-hidden'>
        <Swiper
          spaceBetween={450}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide><img src={Pic1} alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src={Pic2} alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src={Pic3} alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src={Pic4} alt="Slide 4" /></SwiperSlide>
        </Swiper>
      </section>
      <section className='about'>
        <div className='block'>
          <h2 className='title-block'>About</h2>
          <p className='block__text'>
            It’s a global <span className='block__text_span'>streaming platform</span> for communication and meeting incredibly beautiful people.
            We created an excellent place where you can enjoy your time and <span className='block__text_span'>find appropriate matches</span> at first.
          </p>
          <p>
            Approximately 80% of our users have already found their lovelies.
            <span className='block__text_span'>Watch streams</span> without hindrance and meet someone <span className='block__text_span'>who interests you.</span>
          </p>
          <button className='block__button' onClick={handleJoinClick}>Join for free</button>
        </div>
      </section>

      <section className='title-why'>
        <h2 className='title'>Why join us?</h2>
        <ul className='title-why__list'>
          <li className='title-why__item'>
            <h3 className='title-why__tag'><TiWeatherWindyCloudy />Chat with attractive streamers for free</h3>
            <p className='title-why__text'>
              It’s an excellent web platform for streaming. Write messages to the beautiful streamers for free and explore this magical universe of communication!
            </p>
          </li>
          <li className='title-why__item'>
            <h3 className='title-why__tag'><FcLock />Only verified users</h3>
            <p className='title-why__text'>
              We care about the privacy and security of our customers. All accounts are verified so look for an attractive stranger confidently!
            </p>
          </li>
          <li className='title-why__item none'>
            <h3 className='title-why__tag'><TiWeatherWindyCloudy />Chat with attractive streamers for free</h3>
            <p className='title-why__text'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quod, suscipit expedita commodi temporibus ullam iure numquam amet nobis exercitationem eligendi qui quas quam! Culpa temporibus eaque delectus a vel?
            </p>
          </li>
          <li className='title-why__item none'>
            <h3 className='title-why__tag'><TiWeatherWindyCloudy />Chat with attractive streamers for free</h3>
            <p className='title-why__text'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quod, suscipit expedita commodi temporibus ullam iure numquam amet nobis exercitationem eligendi qui quas quam! Culpa temporibus eaque delectus a vel?
            </p>
          </li>
          <li className='title-why__item'>
            <h3 className='title-why__tag'><FcSearch />Customized search</h3>
            <p className='title-why__text'>
              Match alluring partners for your own preferences. Maybe you will be interested in a hot slender European or shy beautiful Asian? Make your choice…
            </p>
          </li>
          <li className='title-why__item'>
            <h3 className='title-why__tag'><FcOk />Easy to use</h3>
            <p className='title-why__text'>
              Forget about hundreds of annoying notifications and inconvenient use. We have created the platform as easy to use and search as possible. Don’t waste your time studying functionality. Just enjoy!
            </p>
          </li>
        </ul>
      </section>
      <section className='title-why-hidden'>
      <h2 className='title why'>Why join us?</h2>
  <Swiper
    spaceBetween={30} // Відстань між слайдами
    slidesPerView={1}
    autoplay={{ delay: 4000, disableOnInteraction: false }} // Кількість слайдів, що відображаються одночасно
    pagination={{ clickable: false}} // Додає пагінацію
    loop={true} // Зациклення слайдів
    modules={[Autoplay, Pagination, Navigation]}
  >
    <SwiperSlide>
      <div className='title-why__item'>
      <h3 className='title-why__tag'><TiWeatherWindyCloudy />Chat with attractive streamers for free</h3>
      <p className='title-why__text'>
        It’s an excellent web platform for streaming. Write messages to the beautiful streamers for free and explore this magical universe of communication!
      </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='title-why__item'>
      <h3 className='title-why__tag'><FcLock />Only verified users</h3>
      <p className='title-why__text'>
        We care about the privacy and security of our customers. All accounts are verified so look for an attractive stranger confidently!
      </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='title-why__item'>
      <h3 className='title-why__tag'><FcSearch />Customized search</h3>
      <p className='title-why__text'>
        Match alluring partners for your own preferences. Maybe you will be interested in a hot slender European or shy beautiful Asian? Make your choice…
      </p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='title-why__item'>
      <h3 className='title-why__tag'><FcOk />Easy to use</h3>
      <p className='title-why__text'>
        Forget about hundreds of annoying notifications and inconvenient use. We have created the platform as easy to use and search as possible. Don’t waste your time studying functionality. Just enjoy!
      </p>
      </div>
    </SwiperSlide>
  </Swiper>
      </section>

      <section className='title-find'>
        <h2 className='title why'>Here you can find</h2>
        <ul className='list__find'>
          <li className='find__item'><p className='item__text'><FcSelfServiceKiosk /> Watching streams of everyone you really like;</p></li>
          <li className='find__item'><p className='item__text'><FcBusinesswoman />Free communication with pretty streamers;</p></li>
          <li className='find__item'><p className='item__text'><FcInvite />Sweet connection with people you match;</p></li>
          <li className='find__item'><p className='item__text'><GiIceSkate />New acquaintances with someone who has similar interests;</p></li>
          <li className='find__item'><p className='item__text'><FcSpeaker />Fascinating hobbies and exciting occupations from people you fancy.</p></li>
        </ul>
      </section>

      <section className='swipe'>
        <h2 className='title__swipe'>It’s a universe of communication and streaming without borders!</h2>
        <h3 className='title__two'>Let yourself be free – share your thoughts, delight, and fears with beautiful strangers!</h3>
        <Swiper
          spaceBetween={450}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide><img src={Pic5} alt="Slide 5" /></SwiperSlide>
          <SwiperSlide><img src={Pic6} alt="Slide 6" /></SwiperSlide>
          <SwiperSlide><img src={Pic7} alt="Slide 7" /></SwiperSlide>
          <SwiperSlide><img src={Pic8} alt="Slide 8" /></SwiperSlide>
          <SwiperSlide><img src={Pic9} alt="Slide 9" /></SwiperSlide>
          <SwiperSlide><img src={Pic10} alt="Slide 10" /></SwiperSlide>
        </Swiper>
        <button className='block__button twise' onClick={handleJoinClick}>Join us for free</button>
      </section>
      <section className='swipe-hidden'>
        <h2 className='title__swipe'>It’s a universe of communication and streaming without borders!</h2>
        <h3 className='title__two mobile'>Let yourself be free – share your thoughts, delight, and fears with beautiful strangers!</h3>
        <Swiper
          spaceBetween={450}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide><img src={Pic5} alt="Slide 5" /></SwiperSlide>
          <SwiperSlide><img src={Pic6} alt="Slide 6" /></SwiperSlide>
          <SwiperSlide><img src={Pic7} alt="Slide 7" /></SwiperSlide>
          <SwiperSlide><img src={Pic8} alt="Slide 8" /></SwiperSlide>
          <SwiperSlide><img src={Pic9} alt="Slide 9" /></SwiperSlide>
          <SwiperSlide><img src={Pic10} alt="Slide 10" /></SwiperSlide>
        </Swiper>
        <button className='block__button twise' onClick={handleJoinClick}>Join us for free</button>
      </section>
      <section className='joing'>
        <div className='joing__block'>
          <h2 className='title'>It’s a dedicated space for your bold fantasies!</h2>
          <p className='joing__text'>Hundreds of attractive admirers are already waiting for you here. Don’t delay – dive into the world of streaming, flirting, and hot communication right now!</p>
          <button className='block__button' onClick={handleJoinClick}>Write to her</button>
        </div>
        <img className='image' src={Pic} alt='hand' />
      </section>

      <footer>
        <ul className='footer__list'>
          <li>
            <ul>
              <li>support@gmail.com</li>
              <li>Unsubscribe</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className='bold'>Legal terms</li>
              <li>Terms of Use</li>
              <li>Disclosures & Disclaimers</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className='bold'>Privacy info</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className='bold'>About</li>
              <li>About Us</li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
