import githubLogo from ".././assets/github-mark.svg";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container center">
          <h3>Class Connect</h3>
          <div className="github-footer">
            <span></span>
            <a href="https://www.github.com/divyanshraj0408/classconnect">
              <img src={githubLogo} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
