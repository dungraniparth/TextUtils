import React from "react";

export default function About(props) {
  let myStyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor : props.mode === 'dark'?'rgb(5, 53, 92)':'white',
  }

  return (
    <div className="container" style={{color : props.mode === 'dark'?'white':'#042743'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident quaerat delectus libero nulla vitae facere. Dignissimos error repudiandae dolores officiis doloremque neque nisi debitis, eligendi quos cumque aut ipsa suscipit velit delectus. Eligendi alias inventore, doloremque minima culpa sunt. Quas odio ipsam consequuntur ab, excepturi cumque rem eius, laboriosam repudiandae dolore magni aut totam praesentium? Itaque, magni? Veritatis sapiente enim non quae impedit error praesentium autem, dolores quisquam magnam.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong> Free to Use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda dolore nulla inventore corrupti obcaecati, vitae facere modi fugit adipisci fuga magnam accusantium doloribus, ipsam sit nesciunt excepturi? Distinctio eos optio, tenetur ipsam officiis porro soluta, dolor laboriosam, dicta veniam neque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quisquam soluta rem, deleniti est quibusdam porro praesentium dolores architecto aut!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong> Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet ab, facere natus soluta voluptatem ea nisi sunt totam eaque suscipit corrupti delectus harum iure facilis dignissimos! Adipisci reiciendis omnis aspernatur. Alias tempore delectus iure ut quaerat, cupiditate nostrum dolorum pariatur ipsa rem reprehenderit non saepe illum quod dignissimos doloremque quo suscipit molestiae. Impedit, eaque sunt saepe eum nulla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laborum explicabo, quia exercitationem, asperiores inventore, soluta rem aspernatur impedit distinctio nostrum vel molestias totam. Quam non laborum ad atque molestias!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
