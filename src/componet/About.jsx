import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.png';

const About = () => {
  return (
    <div className='max-lg:pt-48 sm:pt-96'>

      <div className='flex flex-col '>

        <div className='flex justify-center items-center p-10  gap-20 flex-wrap '>

          <div className=' items-start lg:w-1/3'>

            <h1 className='text-3xl font-semibold pb-3 '>Working with us is a pleasure</h1>

            <p className='text-lg  py-2 '>
            Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
            </p>

            <p className='text-lg  pt-5 pb-10 '>
            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.
            </p>

            <button className=' border-2 border-sky-600 text-blue-900 font-semibold rounded-full p-3'>
              READ MORE
            </button>
          </div>


          <div className='w-[700px] shadow-2xl rounded-xl p-3'>
            <img src={img1}
            className='w-full h-[300px] rounded-2xl'
             alt="img" />
             <h1 className='py-3 text-xl font-semibold'>
             Top Notch Services
             </h1>

             <p className='pb-3 text-lg'>
             The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.
             </p>
          </div>


        </div>

        <div className='flex justify-center items-center p-10  gap-20 flex-wrap '>

          <div className='w-[700px] shadow-2xl rounded-xl p-3'>
            <img src={img2}
            className='w-full h-[300px] rounded-2xl'
             alt="img" />
             <h1 className='py-3 text-xl font-semibold'>
             Top Notch Services
             </h1>

             <p className='pb-3 text-lg'>
             The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.
             </p>
          </div>

          <div className=' items-start lg:w-1/3'>

            <h1 className='text-3xl font-semibold pb-3 '>Working with us is a pleasure</h1>

            <p className='text-lg  py-2 '>
            Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
            </p>

            <p className='text-lg  pt-5 pb-10 '>
            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.
            </p>

            <button className=' border-2 border-sky-600 text-blue-900 font-semibold rounded-full p-3'>
              READ MORE
            </button>
          </div>

        </div>

        <div className='flex justify-center items-center p-10  gap-20 flex-wrap '>

          <div className=' items-start lg:w-1/3'>

            <h1 className='text-3xl font-semibold pb-3 '>Working with us is a pleasure</h1>

            <p className='text-lg  py-2 '>
            Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
            </p>

            <p className='text-lg  pt-5 pb-10 '>
            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.
            </p>

            <button className=' border-2 border-sky-600 text-blue-900 font-semibold rounded-full p-3'>
              READ MORE
            </button>
          </div>


          <div className='w-[700px] shadow-2xl rounded-xl p-3'>
            <img src={img3}
            className='w-full h-[300px] rounded-2xl'
             alt="img" />
             <h1 className='py-3 text-xl font-semibold'>
             Top Notch Services
             </h1>

             <p className='pb-3 text-lg'>
             The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.
             </p>
          </div>


        </div>

        <div className='flex justify-center items-center p-10  gap-20 flex-wrap '>

          <div className='w-[700px] shadow-2xl rounded-xl p-3'>
            <img src={img4}
            className='w-full h-[300px] rounded-2xl'
             alt="img" />
             <h1 className='py-3 text-xl font-semibold'>
             Top Notch Services
             </h1>

             <p className='pb-3 text-lg'>
             The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.
             </p>
          </div>

          <div className=' items-start lg:w-1/3'>

            <h1 className='text-3xl font-semibold pb-3 '>Working with us is a pleasure</h1>

            <p className='text-lg  py-2 '>
            Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
            </p>

            <p className='text-lg  pt-5 pb-10 '>
            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.
            </p>

            <button className=' border-2 border-sky-600 text-blue-900 font-semibold rounded-full p-3'>
              READ MORE
            </button>
          </div>




        </div>


      </div>

    </div>
  );
}

export default About;
