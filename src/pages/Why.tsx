import React from 'react';

export const Why: React.FC = () => {
  return (
    <div>
      <p>
        Why did I create this site? Well to get some experience with React and Typescript while also getting to know common
        datastructures and algorithms abit better. I'm no math or datasciene expert by any means, but it kinda just caught my
        interest. Alot of the stuff that I use come from the great course made by Colt Steele, that you should totally checkout:{' '}
        <a href='https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass' target='_blank'>
          Its this one!
        </a>
      </p>
      <p>
        You are very welcome to read through the source code, which can be found here:{' '}
        <a href='https://github.com/magnuslundstrom/m-algo' target='_blank'>
          github link
        </a>
        , however you shouldnt expect to see perfectly readable code, since I just took every opportunity I could to sort of "over
        engineer" the code in order to learn Typescript and advanced types to know even better. You might however find some wierd
        solutions and cool tricks.
      </p>
    </div>
  );
};
