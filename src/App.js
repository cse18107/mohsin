import './App.css';
import backgroundImage from './assets/wings.png';
import FormComponent from './component/FormComponent';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container_app center">
      <div className="content_app flex">
        <div className="content_app_left_container relative">
          <img src={backgroundImage} className="img_css_style" alt="logo" />
          <div className="img-overlay absolute center">
            <div className='width-70'>
              <div className='sub-heading center'>Altitude Air</div>
              <div className='sub-para'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
        <div className="content_app_right_container center">
          <FormComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
