import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';


const canalArray = [
  {
    id: 1,
    titulo: '¿Quiénes somos?',
    link: 'mZUzBL7_EuY',
  },
  {
    id: 2,
    titulo: 'Invitación a CRIPTO CONFERENCIA',
    link: 'HMjJ-Qa_NRE',
  }, {
    id: 3,
    titulo: 'Invitación a CRIPTO CONFERENCIA',
    link: 'IQa9SIZcY1U',
  }, {
    titulo: 'Invitación a CRIPTO CONFERENCIA',
    id: 4,
    link: 'CEQR7eyQJ7w',
  },
];

const Canal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={'center-content'}><h2 className='text-xl font-bold py-5'>NUESTRA CANAL DE YOUTUBE</h2></div>

      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-full p-6'}>

        {
          canalArray.map(links => (


              <div className='block shadow-xl  text-white mb-14 md:mb-0 center-content h-60'>
                <div>
                  <h1 className="text-black">{links.titulo}</h1>
                  <React.Fragment>
                    <div>
                      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={links.link}
                                  onClose={() => setOpen(false)} />
                    </div>
                    <button className='btn-primary bg-red-600 rounded px-1' onClick={() => setOpen(true)}>ver video</button>
                  </React.Fragment>
                </div>
              </div>
            ),
          )
        }

      </div>
    </>
  );
};
export default Canal;