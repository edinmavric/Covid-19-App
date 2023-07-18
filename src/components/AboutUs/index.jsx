import './index.scss';
import OurCard from './OurCard';

const ourInfo = [
  {
    name: 'Edin Mavric',
    description:
      "Edin was in charge of the main functionalities of the application, as well as the arrangement of components in the project, and it's overall design.",
    img: 'https://avatars.githubusercontent.com/u/119134550?v=4',
    facebookLink: 'https://www.facebook.com/profile.php?id=100009926763757',
    instagramLink: 'https://www.instagram.com/mavric.edin/',
    gitHubLink: 'https://www.github.com/edinmavric/',
    linkedInLink: 'https://www.linkedin.com/in/edin-mavric-926116265/',
  },
  {
    name: 'Nerma Hot',
    description:
      'Nerma was the most deserving when it comes to the Country Stats Page, where it was necessary to do a lot of functionality and choose the right styles.',
    img: 'https://avatars.githubusercontent.com/u/119169654?v=4',
    facebookLink: 'https://www.facebook.com/nerma.hoot.1',
    instagramLink: 'https://www.instagram.com/mavric.edin/',
    gitHubLink: 'https://www.github.com/Nerma5/',
    linkedInLink: 'https://www.linkedin.com/in/nerma-hot-685ab8263/',
  },
  {
    name: 'Matej Kevkic',
    description:
      'Matej is our main designer. In addition to doing most of the styling for our project, he had to do the communication with the whole team to get a better feel and fit.',
    img: 'https://avatars.githubusercontent.com/u/121257490?v=4',
    facebookLink: 'https://www.facebook.com/profile.php?id=100076456950586',
    instagramLink: 'https://www.instagram.com/matej_kevkic/',
    gitHubLink: 'https://www.github.com/matejkevkic/',
    linkedInLink: 'https://www.linkedin.com/in/matej-kevkic-976804263/',
  },
  {
    name: 'Remzo Gusinac',
    description:
      'Remzo participated in all fields, starting from the planning of the project. He offered solutions to our team so that everything would work in a correct way.',
    img: 'https://avatars.githubusercontent.com/u/77622745?v=4',
    facebookLink: 'https://www.facebook.com/remzo.gusinac',
    instagramLink: 'https://www.instagram.com/remzo_gusinac/',
    gitHubLink: 'https://www.github.com/Remzo00/',
    linkedInLink: 'https://www.linkedin.com/in/remzo-gusinac-840052220/',
  },
];

const About = () => {
  return (
    <div className="About">
      <h2>
        Our application is made on the basis of accurate data regarding
        information about covid-19. You can see about our team below.
      </h2>
      {ourInfo.map(el => (
        <OurCard
          name={el.name}
          description={el.description}
          img={el.img}
          facebookLink={el.facebookLink}
          instagramLink={el.instagramLink}
          gitHubLink={el.gitHubLink}
          linkedInLink={el.linkedInLink}
        />
      ))}
    </div>
  );
};

export default About;
