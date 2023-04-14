import React from 'react'
import './frontend.css'
import path from './Infrastructure9.jpg'
import path2 from './Infrastructure3.jpg'
import path3 from './Infrastructure5.jpg'
import path4 from './library1.jpg'
import path5 from './library2.jpeg'
import path6 from './digital-lib-1.jpeg'
import path7 from './Digital-Library2.jpg'



const Facilities = () => {
  return (
    <div>
      <div className='container'>
        <div className='row infraimg'>
          <h3 className='text-danger mt-3'>Infrastructure</h3>
          <p className='infrapara'>Bharat Institutions sprawling 120 acres campus with a built-up area of 6, 00,000 sq. ft at Mangalpally, Ibrahimpatnam. Bharat Institutions campus is a beautiful and serene atmosphere ideally suited for technical education. The infrastructure and facilities available on campus are amongst the very best. It is a wholly self-contained campus comprising of everything that students on campus would ever require. In order to take care of aesthetic dimensions of the campus, considerable efforts have been made in the recent past to beautify the campus. Greenery in terms of the grass, permanent green plants, trees and flowers have been laid down all over the campus. Horticulture maintenance and development has been meticulously monitored to keep up with the changing weather.
          </p>
          <img src={path} alt='image can not load' />
          <p className='text-danger infrapara pt-3 infraimgp'>3, 50, 000 sft upcoming College Block</p>
          <div className='col-md-6 infraimg'>
            <img src={path2} alt='image can not load' />
          </div>
          <div className='col-md-6 infraimg'>
            <img src={path3} alt='image can not load' />
          </div>
          <p className='text-danger infrapara pt-3 infraimgp'>5, 00, 000 sft upcoming Engineering College Block
          </p>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row infraimg'>
          <h3 className='text-danger mt-3'> Library</h3>
          <p className='infrapara'>Two libraries spanning over an area of 1984 sqm. & 6000 sft.Students are provided with book banks facility. It has INDEST membership. Library system is supported by automated software Libris Software package 2.0 Version & Koha Open source Software . It has the collection of 64,407 volumes of books and 16,641 titles as on 20th February ,2020. It has subscribed to more than 4000 online journals through DELENET: INFOTRAC Engineering, Science and Technology Collection (IESTC) and Management Collection and it is subscribing more than 172 National and International Journals and Magazines in print.</p>

          <div className='col-md-6 infraimg'>
            <img src={path4} alt='image can not load' />
          </div>
          <div className='col-md-6 infraimg inimg'>
            <img src={path5} alt='image can not load' />
          </div>

        </div>
      </div>
      <div className='container mt-4'>
        <div className='row infraimg'>
          <h3 className='text-danger mt-3'>DIGITAL LIBRARY:</h3>
          <p className='infrapara'>Through SONET, the digital library is facilitated in the main library. It has 30 latest computer systems. The digital library has an access capability of 4000 e-journals of nationals and international repute through INDEST, IEL on-line, ASME etc.

There is also a dedicated streaming media server which hosts the Massachusetts Institute of Technology Open Courseware content and NPTEL's lecture series from premier engineering institutes in India like IIT's.</p>

          <div className='col-md-6 infraimg'>
            <img src={path6} alt='image can not load' />
          </div>
          <div className='col-md-6 infraimg inimg'>
            <img src={path7} alt='image can not load' />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Facilities