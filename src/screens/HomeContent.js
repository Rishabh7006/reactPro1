import React from 'react';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img5.jpg'

const HomeContent = () => {

  const deathNoteContent = `
    Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata.
    The story follows Light Yagami, a high school student who discovers a mysterious notebook that allows him
    to kill anyone whose name he writes in it. The notebook, known as the Death Note, brings about moral
    dilemmas and psychological tension as Light takes on the role of a self-proclaimed "god" of justice.
  `;
  const d1 = `There is no such thing as heaven or hell. Whatever you do while you’re alive, everybody goes to the same place once you die. Death is Equal.`;
  const d2 = `What is right from wrong? What is good from evil? Nobody can tell the difference between them. Even if there was a God. Even if a god and his world existed, I’d still stop and think for myself. I’d decide for myself whether his teachings are right or wrong. After all, I am just the same as you. I believe in my own convictions as to what I believe is right, and consider them to be righteous.`

  const d3 = `In this world, there is only good and evil, that was the first universal truth I understood from observing the world around me when I was a child. Every human being without any exception ends up falling into one of these categories.`

  return (
      <div>
          <div className="container mt-4">
              <div className='p-3 m-0 border-0 bd-example m-0 border-0'>
                  <h2>Death Note</h2>
                  <p>{deathNoteContent}</p>
              </div>
              <div className="row">

                  <div className="col-md-6 mb-4">
                      <img src={img1} className="img-fluid" alt="Death Note" />
                  </div>
                  <div className="col-md-6 mb-4">
                      <h2>1. Death is Equal</h2>
                      <p>{d1}</p>
                  </div>

                  <div className="col-md-6 mb-4">
                      <img src={img2} className="img-fluid" alt="Death Note" />
                  </div>
                  <div className="col-md-6 mb-4">
                      <h2>2. The right and Wrong</h2>
                      <p>{d2}</p>
                  </div>

                  <div className="col-md-6 mb-4">
                      <img src={img3} className="img-fluid" alt="Death Note" />
                  </div>
                  <div className="col-md-6 mb-4">
                      <h2>3. Universal truth</h2>
                      <p>{d3}</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default HomeContent;