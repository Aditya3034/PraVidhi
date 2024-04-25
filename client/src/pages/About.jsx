import React from 'react';

const About = () => {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto font-Higuen'>
      <h1 className='text-4xl font-bold m-10 text-slate-700'>About <span className="text-slate-500">Pravidhi</span></h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <p className='mb-4 text-lg text-slate-700 leading-relaxed'>
          Our project, <span className="text-slate-500">Pravidhi</span>, is dedicated to revolutionizing the agricultural supply chain. We aim to empower farmers and improve the connection between farmers, warehouse owners, and retailers, ultimately enhancing the efficiency and transparency of agricultural trade.
        </p>
        <p className='mb-4 text-lg text-slate-700 leading-relaxed'>
          Traditional agricultural trading systems often face challenges such as inefficiencies and lack of transparency due to intermediaries. These intermediaries can reduce farmers' profits and make it difficult for them to negotiate fair prices for their produce. To address these issues, we're developing a web application that directly connects farmers with warehouse owners and retailers, bypassing intermediaries.
        </p>
        <p className='mb-4 text-lg text-slate-700 leading-relaxed'>
          Our platform allows farmers to create profiles, list their products for sale, and interact directly with potential buyers. Additionally, we integrate data analytics tools to provide farmers with valuable market insights, helping them make informed decisions about crop cultivation and sales.
        </p>
        <p className='mb-4 text-lg text-slate-700 leading-relaxed'>
          By eliminating intermediaries, our project aims to give farmers more control over their businesses, potentially increasing their profits and improving their livelihoods. We also promote pricing transparency, ensuring that both farmers and buyers understand fair market prices. Furthermore, by streamlining the supply chain, we reduce inefficiencies and delays.
        </p>
        <p className='mb-4 text-lg text-slate-700 leading-relaxed'>
          Our goal is to create a user-friendly platform that fosters a sense of community among farmers and buyers. Through <span className="text-slate-500">Pravidhi</span>, we aim to contribute to sustainable and equitable food production and distribution.
        </p>
      </div>
    </div>
  );
};

export default About;
