import React from 'react';

import SocialMedia from './SocialMedia';
import image from '../../assets/software.svg'

function Home() {

  return (
    <div className="home">

      <div>

        <div className="container">

          <div className="containSection">
            <div className="home__statement_text">
              <h2>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</h2>
            </div>
            <div className="home__socialMedia">
              <SocialMedia />
            </div>
          </div>
          <div className="imageSection">
            <img src={image} alt="Logo" className="logo_image" width="80%" />
          </div>
        </div>

      </div>
      <div className="slider">

      </div>
    </div>


    // <div >
    //   <div className="home">

    //     <div className="container">

    //       <div className="home__statement_text">
    //         <h2>
    //           Mobile and Web Application Developer
    //       </h2>
    //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase

    //         </p>
    //         <div className="home__socialMedia">
    //           <SocialMedia />
    //         </div>

    //       </div>
    //       {/* <div className="xx">
    //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</p>

    //       </div> */}
    //     </div>

    //   </div >
    //   <div className="image" >
    //     {/* <img src={image} /> */}
    //   </div>
    // </div>
  );
}

export default Home;
