// import { useState, useEffect } from 'react';

// const Carousel = ({ videos }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
//     }, 3000); // Cambia el video cada 3 segundos
//     return () => clearInterval(interval);
//   }, [videos]);

//   return (
//     <div className="relative">
//       {videos.map((video, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <video className="w-full h-full object-cover" src={video.src} alt={video.title} autoPlay muted loop />
//           <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4">
//             <p className="text-white">{video.title}</p>
//             <p className="text-white">{video.description}</p>
//           </div>
//         </div>
//       ))}
//       <div className="absolute bottom-0 w-full flex justify-center space-x-2 p-4">
//         {videos.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
//             onClick={() => setActiveIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
