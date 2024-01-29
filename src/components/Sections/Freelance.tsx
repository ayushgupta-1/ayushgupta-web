import {FC, memo} from 'react';

const Freelance: FC = memo(() => {
  return (
    <a
      className="text flex justify-center bg-gradient-to-b from-red-700  to-orange-500 p-4 text-lg font-[700] text-white hover:from-green-600 hover:to-blue-400 hover:font-light sm:text-2xl"
      href="https://www.upwork.com/freelancers/~011e3b0b756f8eba6a">
      <p>Hire on Upwork</p>
    </a>
  );
});

// Freelance.displayName = 'Freelance';
export default Freelance;
