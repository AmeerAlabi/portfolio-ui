import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function WorkCard({ title, date, categories, description }) {
  return (
    <div className=''>    
      <div className='bg-white w-[618px] h-[295px] md:h-[295px] rounded-md shadow-md mt-11 p-5 md:w-[300px]  m-auto'>
      <h2 className='text-dark text-[26px] font-bold'>{title}</h2>
      <p className='text-dark underline'>{date} <span className='border-r-[1px]'>{categories}</span></p>
      <p className='mt-2'>{description}</p>
    </div>
    </div>

  );
}

function WorksPage() {
  const works = [

    {
      title: 'UI interacation of the Week ',
      date: '12 Feb 2019',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis sint hic facilis voluptatum voluptatibus doloremque accusantium nostrum mollitia quisquam.'
    },
    // Add more work objects as needed
    {
      title: 'UI interaction of the week',
      date: '12 Feb 2019',
      categories: 'Express , Handlebars',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis sint hic facilis voluptatum voluptatibus doloremque accusantium nostrum mollitia quisquam.'
    },
    // Add more work objects as needed
    {
      title: 'UI interaction of the week',
      date: '12 Feb 2019',
      categories: 'Express , Handlebars',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis sint hic facilis voluptatum voluptatibus doloremque accusantium nostrum mollitia quisquam.'
    },
    // Add more work objects as needed
    {
      title: 'UI interaction of the week',
      date: '12 Feb 2019',
      categories: 'Express , Handlebars',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis sint hic facilis voluptatum voluptatibus doloremque accusantium nostrum mollitia quisquam.'
    },
    // Add more work objects as needed
  ];

  return (
    <section className='bg-sky p-5 '>
      <h1 className=" text-dark p-2 text-3xl font-bold">
        Blogs 
      </h1>
      <div className='justify-around flex  flex-col   '>
        <p className='text-gray-600 p-2'></p>
       <Link to="/posts" className='text-blue-700 p-3'> </Link> 
      </div>
      
      <div className=' justify-center gap-4 flex-col mt-5'>
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
      <div className=' justify-center gap-4 flex-col mt-5'>
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default WorksPage;
