import './index.scss';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

const OurCard = ({
  name,
  description,
  img,
  facebookLink,
  instagramLink,
  gitHubLink,
  linkedInLink,
}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="image">
          <img src={img} alt="person"></img>
          <h2>{name}</h2>
        </div>
        <div className="content">
          <i>Web Developer</i>
          <p>{description}</p>
          <div>
            <a href={facebookLink} target="_blank" rel="noreferrer">
              <AiFillFacebook className="icons-about" />
            </a>
            <a href={instagramLink} target="_blank" rel="noreferrer">
              <AiFillInstagram className="icons-about" />
            </a>
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <AiFillGithub className="icons-about" />
            </a>
            <a href={linkedInLink} target="_blank" rel="noreferrer">
              <AiFillLinkedin className="icons-about" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCard;
