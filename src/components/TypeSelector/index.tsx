import React from 'react';


const Pokemon: React.FC = () => {
  return (
    <div className='bg-emerald-400 text-white p-4 text-xl'>
      <h1 className='font-bold'>MY POKÉMON </h1>
      <select>
        <option value="">Normal</option>
        <option value="">Dragon</option>
        <option value="">Ice</option>
      </select>
    </div>
  );
};

export default Pokemon;
