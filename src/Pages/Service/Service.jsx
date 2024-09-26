import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Service.css";
import darkImage1 from "./Images/serviceImageDark.png";
import lightImage1 from "./Images/serviceImage.png";
// import Image1 from "./Images/image 1.png";
// import Image2 from "./Images/image 2.png";
// import Image3 from "./Images/image 3.png";
// import Image4 from "./Images/image 4.png";
// import Buttons from "../../Components/Button/Buttons";
// import lineDark from "./Images/Line dark.png";
// import lineLight from "./Images/Line light.png";
// import LinkButton from "../../Components/LinkButton/LinkButton";
import LinkButton from "../../Components/LinkButton/LinkButton";
import { Link } from "react-router-dom";
const Service = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`pageService ${theme}`}>
      <div className="servSect1">
        <img
          alt="serviceImage"
          src={theme === "dark" ? darkImage1 : lightImage1}
          className="image"
        />
      </div>
      <h2 className="serviceH2"> გაეცანით ჩვენს სერვისებს</h2>
      <div className="serviceCardsGrid">
        <div className="serviceCard FR">
          <h2>FRONT - END დეველოპმენტი</h2>
          <h3>ვებ-გვერდისა და აპლიკაციების წინა მხარის განვითარება</h3>
          <ul>
            <li>
              ვებსაიტების შექმნა HTML, CSS და JavaScript/Typescript-ის
              გამოყენებით
            </li>
            <li>
              სივი/პორტფოლიოს საიტები, ლენდინგ ფეიჯები, ბლოგები და ბიზნესის
              ვებსაიტები
            </li>
            <li>
              რეაქტიული (Responsive) დიზაინი, რომელიც ყველა მოწყობილობაზე კარგად
              გამოიყურება
            </li>
            <li>
              ვებ-ანიმაციები და ინტერაქტიული ელემენტები, რაც საიტის ვიზუალურ
              მხარეს გაამრავალფეროვნებს
            </li>
            <li>
              ტექნოლოგიები და ხელსაწყოები (React, Angular, Next.js) რთული
              ვებსაიტების ან აპლიკაციების შესაქმნელად
            </li>
            <li>
              კროს-ბრაუზერული თავსებადობა, რათა საიტი ყველგან კარგად მუშაობდეს
            </li>
          </ul>

          <h3>UX/UI ინტეგრაცია</h3>
          <ul>
            <li>
              UX/UI დიზაინის იმპლემენტაცია და ოპტიმიზაცია, რომ საიტი იყოს
              მოსახერხებელი და ვიზუალურად მიმზიდველი
            </li>
            <li>
              ქსელის ოპტიმიზაცია და გვერდების ჩატვირთვის სისწრაფის გაუმჯობესება
            </li>
            <li>
              ინტერაქტიული კომპონენტების დამატება, როგორიცაა ნავიგაცია, ფორმები,
              ღილაკები და სხვა ელემენტები
            </li>
          </ul>

          <h3>ვებსაიტების ოპტიმიზაცია</h3>
          <ul>
            <li>
              SEO ოპტიმიზაცია, რათა საიტი საძიებო სისტემებში მაღალ პოზიციაზე
              იყოს
            </li>
            <li>
              პროგრესული ვებ აპლიკაციების (PWA) განვითარება, რომ საიტი იმუშაოს
              როგორც ნატურალური აპლიკაცია
            </li>
            <li>
              ვებსაიტის წვდომის გაუმჯობესება და შშმ პირებისთვის ხელმისაწვდომი
              დიზაინი
            </li>
          </ul>

          <h3>მუდმივი მხარდაჭერა და განახლება</h3>
          <ul>
            <li>ვებსაიტის ტექნიკური მხარდაჭერა და რეგულარული განახლებები</li>
            <li>
              ახალი ფუნქციების დამატება, როგორიცაა ფორუმი, გალერეა, სოციალური
              მედიის ინტეგრაცია და სხვა
            </li>
            <li>საიტის რეგულარული ტესტირება და გაუმჯობესება</li>
          </ul>
        </div>

        <div className="serviceCard BK">
          <h2>BACK - END დეველოპმენტი</h2>
          <h3>სერვერის მხარის განვითარება და მენეჯმენტი</h3>
          <ul>
            <li>
              ვებ აპლიკაციების სერვერის მხარის განვითარება, როგორიცაა
              რეგისტრაცია/ავტორიზაცია, მომხმარებლის პროფილები
            </li>
            <li>ფორუმი, ბლოგი, კომუნიკაციის სისტემები და ჩეთები</li>
            <li>
              გადახდის სისტემები, სადაც მომხმარებელს შეუძლია პროდუქტების ყიდვა
            </li>
            <li>
              სერვერის არქიტექტურის შექმნა და API-ების შემუშავება, რომელიც
              კომუნიკაციას ახდენს წინა მხარესთან
            </li>
            <li>
              მონაცემთა ბაზის დიზაინი და მართვა (SQL და NoSQL ტექნოლოგიები)
            </li>
            <li>
              უსაფრთხოების მექანიზმების იმპლემენტაცია, რათა დაცული იყოს
              მომხმარებლის მონაცემები
            </li>
          </ul>

          <h3>ინტეგრაცია და მასშტაბურობა</h3>
          <ul>
            <li>
              მონაცემთა მასშტაბირებადი სისტემების შექმნა, რათა დიდი რაოდენობის
              მომხმარებელი ერთდროულად ემსახუროს
            </li>
            <li>
              ქლაუდ სერვისების ინტეგრაცია (AWS, Google Cloud, Azure) საიტის
              სანდოობისა და სისწრაფის უზრუნველსაყოფად
            </li>
            <li>
              რეალურ დროში მონაცემების მართვა (WebSockets, ჩატები,
              ნოტიფიკაციები)
            </li>
          </ul>

          <h3>უსაფრთხოება და შესრულება</h3>
          <ul>
            <li>
              სერვერის უსაფრთხოების გაუმჯობესება, მონაცემების დაცვა და
              ქურდობისგან დაცვა
            </li>
            <li>სერვერის პერფორმანსის ოპტიმიზაცია და მუდმივი მონიტორინგი</li>
            <li>ხარვეზების აღმოფხვრა და სისტემის გაუმჯობესება</li>
          </ul>

          <h3>მუდმივი მხარდაჭერა და ტექნიკური მომსახურება</h3>
          <ul>
            <li>სერვერის და მონაცემთა ბაზის მუდმივი ტექნიკური მხარდაჭერა</li>
            <li>ახალი ფუნქციების დამატება და სისტემის განახლება</li>
            <li>სერვერის რეგულარული მონიტორინგი და გაუმჯობესება</li>
          </ul>
        </div>
        <div className="serviceCard GD">
          <h2>გრაფიკული დიზაინი</h2>
          <h3>ლოგოსა და ბრენდის იდენტობის დიზაინი</h3>
          <ul>
            <li>ლოგოს შექმნა</li>
            <li>სრული ბრენდ-იდენტობის პაკეტი</li>
            <li>სავიზიტო ბარათები</li>
            <li>
              სოციალური მედიის ბრენდინგი (პროფილის სურათები, ბანერები და პოსტის
              შაბლონები)
            </li>
          </ul>
          <h3>ბეჭდვითი დიზაინი</h3>
          <ul>
            <li>ბროშურები, ფლაერები და პოსტერი</li>
            <li>პროდუქტის შეფუთვის დიზაინი</li>
            <li>ღონისძიების მასალები: მოსაწვევები, პროგრამები, ბანერები</li>
            <li>
              პროდუქციის დიზაინი (ფეხსაცმელი, მაისურები, სუვენირები და სხვა)
            </li>
          </ul>
          <h3>მარკეტინგის მასალები</h3>
          <ul>
            <li>გაყიდვების პრეზენტაციები და პიჩ-დეკები</li>
            <li>კორპორაციული ბროშურები, კატალოგები</li>
            <li>სარეკლამო პოსტერები და ბანერები</li>
          </ul>
          <h3>ილუსტრაციები</h3>
          <ul>
            <li>
              ილუსტრაციები რედაქტორისთვის, ბრენდინგისთვის ან პროდუქციისთვის
            </li>
            <li>პერსონალური ილუსტრაციები</li>
            <li>წიგნის ილუსტრაციები</li>
          </ul>
          <Link to="/Calculation">
            <button className="priceButton">კალკულაცია</button>
          </Link>{" "}
        </div>
        <div className="serviceCard UX">
          <h2>UX/UI დიზაინი</h2>
          <h3>UX დიზაინი (მომხმარებლის გამოცდილება)</h3>
          <ul>
            <li>მომხმარებლის კვლევა</li>
            <li>ინფორმაციის არქიტექტურა</li>
            <li>ვაირფრემები და პროტოტიპები</li>
            <li>მომხმარებლის ტესტირება და უკუკავშირი</li>
            <li>ინტერაქციული დიზაინი</li>
          </ul>

          <h3>UI დიზაინი (მომხმარებლის ინტერფეისი)</h3>
          <ul>
            <li>ვიზუალური დიზაინი</li>
            <li>რესფონსიული დიზაინი</li>
            <li>დიზაინის სისტემები და სტილები</li>
            <li>მაღალი ხარისხის მოქაფები</li>
          </ul>

          <h3>ვებსაიტისა და აპლიკაციის დიზაინი</h3>
          <ul>
            <li>ლენდინგ გვერდები</li>
            <li>ეკომერსის გვერდები</li>
            <li>მობილური აპლიკაციის ინტერფეისი</li>
          </ul>

          <h3>განახლება და ოპტიმიზაცია</h3>
          <ul>
            <li>UX აუდიტები</li>
            <li>მომხმარებლისთვის მორგებული განახლებები</li>
            <li>A/B ტესტირება</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
