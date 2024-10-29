// // import React, { useState } from 'react';
// // import pic1 from '../../assets/images/blog/1.jpg';
// // import pic2 from '../../assets/images/blog/2.jpg';
// // import pic3 from '../../assets/images/blog/3.jpg';
// // import pic4 from '../../assets/images/blog/4.jpg';
// // import pic5 from '../../assets/images/blog/5.jpg';
// // import pic6 from '../../assets/images/blog/6.jpg';
// // import pic7 from '../../assets/images/blog/7.jpg';
// // import pic8 from '../../assets/images/blog/author.jpg';


// // const Gallery = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [filter, setFilter] = useState('All');

// //   const images = [
// //     { src: pic1, alt: 'Event 1', category: 'Sports' },
// //     { src: pic2, alt: 'Event 2', category: 'Academics' },
// //     { src: pic1, alt: 'Event 1', category: 'Sports' },
// //     { src: pic2, alt: 'Event 2', category: 'Academics' },
// //     { src: pic7, alt: 'Event 1', category: 'Sports' },
// //     { src: pic8, alt: 'Event 2', category: 'Academics' },
// //     { src: pic7, alt: 'Event 1', category: 'Sports' },
// //     { src: pic8, alt: 'Event 2', category: 'Academics' },
// //     { src: pic1, alt: 'Event 1', category: 'Sports' },
// //     { src: pic8, alt: 'Event 2', category: 'Academics' },
// //     { src: pic1, alt: 'Event 1', category: 'Sports' },
// //     { src: pic8, alt: 'Event 2', category: 'Academics' },
// //     // Add more image objects here
// //   ];

// //   const albums = [
// //     { src: pic3, title: 'Album 1' },
// //     { src: pic4, title: 'Album 2' },
// //     { src: pic5, title: 'Album 1' },
// //     { src: pic6, title: 'Album 2' },
// //     { src: pic5, title: 'Album 1' },
// //     { src: pic6, title: 'Album 2' },
// //     { src: pic5, title: 'Album 1' },
// //     { src: pic6, title: 'Album 2' },
// //     { src: pic5, title: 'Album 1' },
// //     { src: pic6, title: 'Album 2' },
// //     // Add more album objects here
// //   ];

// //   const filteredImages = images.filter(image => 
// //     (filter === 'All' || image.category === filter) && 
// //     image.alt.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="gallery-container">
// //       <div className="page-title">
// //         <h1>Gallery</h1>
// //         <p>Explore Moments from Our School Life</p>
// //       </div>

// //       <div className="gallery-intro">
// //         <p>Welcome to our gallery. Here you can find photos from various school events and activities. Use the filters below to browse specific categories.</p>
// //       </div>

// //       <div className="filter-search">
// //         <input 
// //           type="text" 
// //           placeholder="Search..." 
// //           value={searchTerm} 
// //           onChange={(e) => setSearchTerm(e.target.value)} 
// //         />
// //         <div className="filters">
// //           {['All', 'Sports', 'Academics', 'Cultural Events', 'Field Trips'].map(category => (
// //             <button 
// //               key={category} 
// //               onClick={() => setFilter(category)}
// //               className={filter === category ? 'active' : ''}
// //             >
// //               {category}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="image-grid">
// //         {filteredImages.map((image, index) => (
// //           <div className="image-item" key={index}>
// //             <img src={image.src} alt={image.alt} />
// //             <p>{image.alt}</p>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="featured-albums">
// //         <h2>Highlighted Albums</h2>
// //         {albums.map((album, index) => (
// //           <div className="album-item" key={index}>
// //             <img src={album.src} alt={album.title} />
// //             <p>{album.title}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Gallery;

// import gallery from '../../data/Galleries.json';
// import React, { useState, useEffect } from 'react';
// import ImageGallery from 'react-image-gallery';

// import 'react-image-gallery/styles/css/image-gallery.css';

// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All');

//   useEffect(() => {
//     fetch(gallery)
//       .then(response => response.json())
//       .then(data => setImages(data))
//       .catch(error => console.error('Error fetching images:', error));
//   }, []);

//   const filteredImages = images.filter(image => 
//     (filter === 'All' || image.category === filter) &&
//     image.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const galleryItems = filteredImages.map(image => ({
//     original: image.image,
//     thumbnail: image.thumbnail,
//     description: image.description,
//   }));

//   return (
//     <div className="gallery-container">
//       <div className="page-title">
//         <h1>Gallery</h1>
//         <p>Explore Moments from Our School Life</p>
//       </div>

//       <div className="gallery-intro">
//         <p>Welcome to our gallery. Here you can find photos from various school events and activities. Use the filters below to browse specific categories.</p>
//       </div>

//       <div className="filter-search">
//         <input 
//           type="text" 
//           placeholder="Search..." 
//           value={searchTerm} 
//           onChange={(e) => setSearchTerm(e.target.value)} 
//         />
//         <div className="filters">
//           {['All', 'Sports', 'Academics', 'Cultural Events', 'Field Trips'].map(category => (
//             <button 
//               key={category} 
//               onClick={() => setFilter(category)}
//               className={filter === category ? 'active' : ''}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="image-grid">
//         <ImageGallery items={galleryItems} showFullscreenButton={true} showPlayButton={true} />
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// import React, { useState } from 'react';
// import ImageGallery from 'react-image-gallery';

// import 'react-image-gallery/styles/css/image-gallery.css';

// import pic1 from '../../assets/images/blog/1.jpg';
// import pic2 from '../../assets/images/blog/2.jpg';
// import pic3 from '../../assets/images/blog/3.jpg';
// import pic4 from '../../assets/images/blog/4.jpg';
// import pic5 from '../../assets/images/blog/5.jpg';
// import pic6 from '../../assets/images/blog/6.jpg';
// import pic7 from '../../assets/images/blog/7.jpg';
// import pic8 from '../../assets/images/blog/author.jpg';

// const Gallery = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [yearFilter, setYearFilter] = useState('All');

//   const images = [
//     { src: pic1, alt: 'Event 1', category: 'Sports', year: '2023' },
//     { src: pic2, alt: 'Event 2', category: 'Academics', year: '2022' },
//     { src: pic1, alt: 'Event 1', category: 'Sports', year: '2023' },
//     { src: pic2, alt: 'Event 2', category: 'Academics', year: '2022' },
//     { src: pic1, alt: 'Event 1', category: 'Sports', year: '2023' },
//     { src: pic2, alt: 'Event 2', category: 'Academics', year: '2022' },
//     { src: pic1, alt: 'Event 1', category: 'Sports', year: '2023' },
//     { src: pic2, alt: 'Event 2', category: 'Academics', year: '2022' },
//     // Add more image objects here
//   ];

//   const albums = [
//     { src: pic3, title: 'Album 1' },
//     { src: pic4, title: 'Album 2' },
//     { src: pic5, title: 'Album 2' },
//     { src: pic6, title: 'Album 2' },
//     { src: pic3, title: 'Album 1' },
//     { src: pic4, title: 'Album 2' },
//     { src: pic5, title: 'Album 2' },
//     { src: pic6, title: 'Album 2' },
//     // Add more album objects here
//   ];

//   const filteredImages = images.filter(image => 
//     (filter === 'All' || image.category === filter) &&
//     (yearFilter === 'All' || image.year === yearFilter) &&
//     image.alt.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const galleryItems = filteredImages.map(image => ({
//     original: image.src,
//     thumbnail: image.src,
//     description: image.alt,
//   }));

//   const years = [...new Set(images.map(image => image.year))];

//   return (
//     <div className="gallery-container">
//       <div className="page-title">
//         <h1>Gallery</h1>
//         <p>Explore Moments from Our School Life</p>
//       </div>

//       <div className="gallery-intro">
//         <p>Welcome to our gallery. Here you can find photos from various school events and activities. Use the filters below to browse specific categories.</p>
//       </div>

//       <div className="filter-search">
//         <input 
//           type="text" 
//           placeholder="Search..." 
//           value={searchTerm} 
//           onChange={(e) => setSearchTerm(e.target.value)} 
//         />
//         <div className="filters">
//           {['All', 'Sports', 'Academics', 'Cultural Events', 'Field Trips'].map(category => (
//             <button 
//               key={category} 
//               onClick={() => setFilter(category)}
//               className={filter === category ? 'active' : ''}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="year-filters">
//           {['All', ...years].map(year => (
//             <button 
//               key={year} 
//               onClick={() => setYearFilter(year)}
//               className={yearFilter === year ? 'active' : ''}
//             >
//               {year}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="image-grid">
//         <ImageGallery items={galleryItems} showFullscreenButton={true} showPlayButton={true} />
//       </div>

//       <div className="featured-albums">
//         <h2>Highlighted Albums</h2>
//         {albums.map((album, index) => (
//           <div className="album-item" key={index}>
//             <img src={album.src} alt={album.title} />
//             <p>{album.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// import React, { useState } from 'react';
// import ImageGallery from 'react-image-gallery';

// import 'react-image-gallery/styles/css/image-gallery.css';

// import pic1 from '../../assets/images/blog/1.jpg';
// import pic2 from '../../assets/images/blog/2.jpg';
// import pic3 from '../../assets/images/blog/3.jpg';
// import pic4 from '../../assets/images/blog/4.jpg';
// import pic5 from '../../assets/images/blog/5.jpg';
// import pic6 from '../../assets/images/blog/6.jpg';
// import pic7 from '../../assets/images/blog/7.jpg';
// // import pic8 from '../../assets/images/blog/author.jpg';

// const Gallery = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [yearFilter, setYearFilter] = useState('All');

//   const images = [
//     { src: pic1, alt: 'Sports Event 1', category: 'Sports', year: '2023' },
//     { src: pic2, alt: 'Academic Event 2', category: 'Academics', year: '2022' },
//     { src: pic3, alt: 'Cultural Event 3', category: 'Cultural Events', year: '2023' },
//     { src: pic4, alt: 'Field Trip 4', category: 'Field Trips', year: '2021' },
//     { src: pic5, alt: 'Sports Event 5', category: 'Sports', year: '2023' },
//     { src: pic6, alt: 'Academic Event 6', category: 'Academics', year: '2022' },
//     { src: pic7, alt: 'Cultural Event 7', category: 'Cultural Events', year: '2023' },
//     { src: pic2, alt: 'Field Trip 8', category: 'Field Trips', year: '2021' },
//   ];

//   const filteredImages = images.filter(image => 
//     (filter === 'All' || image.category === filter) &&
//     (yearFilter === 'All' || image.year === yearFilter) &&
//     image.alt.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const galleryItems = filteredImages.map(image => ({
//     original: image.src,
//     thumbnail: image.src,
//     description: image.alt,
//   }));

//   const years = [...new Set(images.map(image => image.year))];

//   return (
//     <div className="gallery-container">
//       <div className="page-title">
//         <h1>Gallery</h1>
//         <p>Explore Moments from Our School Life</p>
//       </div>

//       <div className="gallery-intro">
//         <p>Welcome to our gallery. Here you can find photos from various school events and activities. Use the filters below to browse specific categories.</p>
//       </div>

//       <div className="filter-search">
//         <input 
//           type="text" 
//           placeholder="Search..." 
//           value={searchTerm} 
//           onChange={(e) => setSearchTerm(e.target.value)} 
//         />
//         <div className="filters">
//           {['All', 'Sports', 'Academics', 'Cultural Events', 'Field Trips'].map(category => (
//             <button 
//               key={category} 
//               onClick={() => setFilter(category)}
//               className={filter === category ? 'active' : ''}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="year-filters">
//           {['All', ...years].map(year => (
//             <button 
//               key={year} 
//               onClick={() => setYearFilter(year)}
//               className={yearFilter === year ? 'active' : ''}
//             >
//               {year}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="image-grid">
//         <ImageGallery items={galleryItems} showFullscreenButton={true} showPlayButton={true} />
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

import pic1 from '../../assets/images/blog/1.jpg';
import pic2 from '../../assets/images/blog/2.jpg';
import pic3 from '../../assets/images/blog/3.jpg';
import pic4 from '../../assets/images/blog/4.jpg';
import pic5 from '../../assets/images/blog/5.jpg';
import pic6 from '../../assets/images/blog/6.jpg';
import pic7 from '../../assets/images/blog/7.jpg';
import pic8 from '../../assets/images/blog/8.jpg';
import pic9 from '../../assets/images/blog/10.jpg';
import pic10 from '../../assets/images/blog/11.jpg';
import pic11 from '../../assets/images/blog/12.jpg'
// import pic8 from '../../assets/images/blog/author.jpg';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');

  const images = [
    { src: pic1, alt: 'Sports Event 1', category: 'Sports', year: '2023' },
    { src: pic2, alt: 'Academic Event 2', category: 'Academics', year: '2022' },
    { src: pic3, alt: 'Cultural Event 3', category: 'Cultural Events', year: '2023' },
    { src: pic4, alt: 'Field Trip 4', category: 'Field Trips', year: '2021' },
    { src: pic5, alt: 'Sports Event 5', category: 'Sports', year: '2023' },
    { src: pic6, alt: 'Academic Event 6', category: 'Academics', year: '2022' },
    { src: pic7, alt: 'Cultural Event 7', category: 'Cultural Events', year: '2023' },
    { src: pic8, alt: 'Field Trip 8', category: 'Cultural Events', year: '2021' },
    { src: pic9, alt: 'Academic Event 2', category: 'Cultural Events', year: '2022' },
    { src: pic10, alt: 'Cultural Event 3', category: 'Cultural Events', year: '2023' },
    { src: pic11, alt: 'Field Trip 4', category: 'Cultural Events', year: '2021' },
    { src: pic10, alt: 'Sports Event 5', category: 'Cultural Events', year: '2023' },
    { src: pic4, alt: 'Academic Event 6', category: 'Academics', year: '2022' },
  ];

  const filteredImages = images.filter(image => 
    (filter === 'All' || image.category === filter) &&
    (yearFilter === 'All' || image.year === yearFilter) &&
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const galleryItems = filteredImages.map(image => ({
    original: image.src,
    thumbnail: image.src,
    description: image.alt,
  }));

  const years = [...new Set(images.map(image => image.year))];

  return (
    <div className="gallery-container">
      <div className="page-title">
        
        <p>Explore Moments from Our School Life</p>
      </div>

      <div className="gallery-intro">
        <p>Welcome to our gallery. Here you can find photos from various school events and activities. Use the filters below to browse specific categories.</p>
      </div>

      <div className="filter-search">
        {/* <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        /> */}
        <div className="filters">
          {['All', 'Sports', 'Academics', 'Cultural Events', 'Field Trips'].map(category => (
            <button 
              key={category} 
              onClick={() => setFilter(category)}
              className={filter === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="year-filters">
          {['All', ...years].map(year => (
            <button 
              key={year} 
              onClick={() => setYearFilter(year)}
              className={yearFilter === year ? 'active' : ''}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="image-grid">
        {filteredImages.length > 0 ? (
          <ImageGallery 
            items={galleryItems} 
            showFullscreenButton={true} 
            showPlayButton={true} 
          />
        ) : (
          <div>
            <p>No images available for the selected filters.</p>
            <ImageGallery 
              items={galleryItems} 
              showFullscreenButton={false} 
              showPlayButton={false} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;


// import React, { useState } from 'react';
// import ImageGallery from 'react-image-gallery';
// import Modal from 'react-modal';
// import { FaSearchPlus, FaSearchMinus, FaSync, FaDownload, FaShareAlt } from 'react-icons/fa';
// import { saveAs } from 'file-saver';

// import 'react-image-gallery/styles/css/image-gallery.css';
// import pic1 from '../../assets/images/blog/1.jpg';
// import pic2 from '../../assets/images/blog/2.jpg';
// import pic3 from '../../assets/images/blog/3.jpg';
// import pic4 from '../../assets/images/blog/4.jpg';
// import pic5 from '../../assets/images/blog/5.jpg';
// import pic6 from '../../assets/images/blog/6.jpg';
// import pic7 from '../../assets/images/blog/7.jpg';
// import pic8 from '../../assets/images/blog/8.jpg';
// import pic9 from '../../assets/images/blog/10.jpg';
// import pic10 from '../../assets/images/blog/11.jpg';
// import pic11 from '../../assets/images/blog/12.jpg';

// Modal.setAppElement('#root');

// const Gallery = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [yearFilter, setYearFilter] = useState('All');
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoom, setZoom] = useState(1);
//   const [rotation, setRotation] = useState(0);

//   const images = [
//     { src: pic1, alt: 'Sports Event 1', category: 'Sports', year: '2023' },
//     { src: pic2, alt: 'Academic Event 2', category: 'Academics', year: '2022' },
//     { src: pic3, alt: 'Cultural Event 3', category: 'Cultural Events', year: '2023' },
//     { src: pic4, alt: 'Field Trip 4', category: 'Field Trips', year: '2021' },
//     { src: pic5, alt: 'Sports Event 5', category: 'Sports', year: '2023' },
//     { src: pic6, alt: 'Academic Event 6', category: 'Academics', year: '2022' },
//     { src: pic7, alt: 'Cultural Event 7', category: 'Cultural Events', year: '2023' },
//     { src: pic8, alt: 'Field Trip 8', category: 'Cultural Events', year: '2021' },
//     { src: pic9, alt: 'Academic Event 2', category: 'Cultural Events', year: '2022' },
//     { src: pic10, alt: 'Cultural Event 3', category: 'Cultural Events', year: '2023' },
//     { src: pic11, alt: 'Field Trip 4', category: 'Cultural Events', year: '2021' },
//     { src: pic10, alt: 'Sports Event 5', category: 'Cultural Events', year: '2023' },
//     { src: pic4, alt: 'Academic Event 6', category: 'Academics', year: '2022' },
//   ];

//   const filteredImages = images.filter(image =>
//     (filter === 'All' || image.category === filter) &&
//     (yearFilter === 'All' || image.year === yearFilter) &&
//     image.alt.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const galleryItems = filteredImages.map(image => ({
//     original: image.src,
//     thumbnail: image.src,
//     description: image.alt,
//   }));

//   const years = [...new Set(images.map(image => image.year))];

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setZoom(1);
//     setRotation(0);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleZoomIn = () => {
//     setZoom(prevZoom => prevZoom + 0.1);
//   };

//   const handleZoomOut = () => {
//     setZoom(prevZoom => Math.max(prevZoom - 0.1, 1));
//   };

//   const handleRotate = () => {
//     setRotation(prevRotation => prevRotation + 90);
//   };

//   const handleDownload = () => {
//     if (selectedImage) {
//       saveAs(selectedImage.src, selectedImage.alt);
//     }
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Check out this image!',
//         text: selectedImage.alt,
//         url: selectedImage.src,
//       }).catch(error => console.error('Error sharing', error));
//     } else {
//       alert('Share functionality is not supported in this browser.');
//     }
//   };

//   return (
//     <div className="gallery-container">
//       <div className="page-title">
//         <p>Explore Moments from Our School Life</p>
//       </div>

//       <div className="gallery-intro">
//         <p>Welcome to our gallery. Here you can find photos from various school events and activities. Use the filters below to browse specific categories.</p>
//       </div>

//       <div className="filter-search">
//         <div className="filters">
//           {['All', 'Sports', 'Academics', 'Cultural Events', 'Field Trips'].map(category => (
//             <button 
//               key={category} 
//               onClick={() => setFilter(category)}
//               className={filter === category ? 'active' : ''}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="year-filters">
//           {['All', ...years].map(year => (
//             <button 
//               key={year} 
//               onClick={() => setYearFilter(year)}
//               className={yearFilter === year ? 'active' : ''}
//             >
//               {year}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="image-grid">
//         {filteredImages.length > 0 ? (
//           <ImageGallery 
//             items={galleryItems} 
//             showFullscreenButton={true} 
//             showPlayButton={true} 
//             onClick={openModal} 
//           />
//         ) : (
//           <div>
//             <p>No images available for the selected filters.</p>
//             <ImageGallery 
//               items={galleryItems} 
//               showFullscreenButton={false} 
//               showPlayButton={false} 
//             />
//           </div>
//         )}
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Image Modal"
//         className="modal"
//         overlayClassName="overlay"
//       >
//         {selectedImage && (
//           <div className="modal-content">
//             <img 
//               src={selectedImage.src} 
//               alt={selectedImage.alt} 
//               style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }} 
//             />
//             <div className="modal-controls">
//               <button onClick={handleZoomIn}><FaSearchPlus /></button>
//               <button onClick={handleZoomOut}><FaSearchMinus /></button>
//               <button onClick={handleRotate}><FaSync /></button>
//               <button onClick={handleDownload}><FaDownload /></button>
//               <button onClick={handleShare}><FaShareAlt /></button>
//             </div>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Gallery;

// import React, { useState } from 'react';
// import ImageGallery from 'react-image-gallery';
// import Modal from 'react-modal';
// import { FaSearchPlus, FaSearchMinus, FaSync, FaDownload, FaShareAlt } from 'react-icons/fa';
// import { saveAs } from 'file-saver';
// import 'react-image-gallery/styles/css/image-gallery.css';
// import pic1 from '../../assets/images/blog/1.jpg';
// import pic2 from '../../assets/images/blog/2.jpg';
// import pic3 from '../../assets/images/blog/3.jpg';
// import pic4 from '../../assets/images/blog/4.jpg';
// import pic5 from '../../assets/images/blog/5.jpg';
// import pic6 from '../../assets/images/blog/6.jpg';
// import pic7 from '../../assets/images/blog/7.jpg';
// import pic8 from '../../assets/images/blog/8.jpg';
// import pic9 from '../../assets/images/blog/10.jpg';
// import pic10 from '../../assets/images/blog/11.jpg';
// import pic11 from '../../assets/images/blog/12.jpg';


// Modal.setAppElement('#root');

// const Gallery = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [yearFilter, setYearFilter] = useState('All');
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoom, setZoom] = useState(1);
//   const [rotation, setRotation] = useState(0);

//   const images = [
//     { src: pic1, alt: 'Sports Event 1', category: 'Sports', year: '2023' },
//     { src: pic2, alt: 'Academic Event 2', category: 'Academics', year: '2022' },
//     { src: pic3, alt: 'Cultural Event 3', category: 'Cultural Events', year: '2023' },
//     { src: pic4, alt: 'Field Trip 4', category: 'Field Trips', year: '2021' },
//     { src: pic5, alt: 'Sports Event 5', category: 'Sports', year: '2023' },
//     { src: pic6, alt: 'Academic Event 6', category: 'Academics', year: '2022' },
//     { src: pic7, alt: 'Cultural Event 7', category: 'Cultural Events', year: '2023' },
//     { src: pic8, alt: 'Field Trip 8', category: 'Cultural Events', year: '2021' },
//     { src: pic9, alt: 'Academic Event 2', category: 'Cultural Events', year: '2022' },
//     { src: pic10, alt: 'Cultural Event 3', category: 'Cultural Events', year: '2023' },
//     { src: pic11, alt: 'Field Trip 4', category: 'Cultural Events', year: '2021' },
//     { src: pic10, alt: 'Sports Event 5', category: 'Cultural Events', year: '2023' },
//     { src: pic4, alt: 'Academic Event 6', category: 'Academics', year: '2022' },
//   ];

//   const filteredImages = images.filter(image =>
//     (filter === 'All' || image.category === filter) &&
//     (yearFilter === 'All' || image.year === yearFilter) &&
//     image.alt.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const galleryItems = filteredImages.map(image => ({
//     original: image.src,
//     thumbnail: image.src,
//     description: image.alt,
//     imageObj: image // Store the whole image object for modal use

//   }));

//   const years = [...new Set(images.map(image => image.year))];

//   const openModal = (image) => {
//     console.log('Opening modal for image:', image);  // Debug log

//     setSelectedImage(image);
//     setZoom(1);
//     setRotation(0);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handleZoomIn = () => {
//     setZoom(prevZoom => prevZoom + 0.1);
//   };

//   const handleZoomOut = () => {
//     setZoom(prevZoom => Math.max(prevZoom - 0.1, 1));
//   };

//   const handleRotate = () => {
//     setRotation(prevRotation => prevRotation + 90);
//   };

//   const handleDownload = () => {
//     if (selectedImage) {
//       saveAs(selectedImage.src, selectedImage.alt);
//     }
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Check out this image!',
//         text: selectedImage.alt,
//         url: selectedImage.src,
//       }).catch(error => console.error('Error sharing', error));
//     } else {
//       alert('Share functionality is not supported in this browser.');
//     }
//   };

//   return (
//     <div className="gallery-container">
//       <div className="page-title">
//         <p>Explore Moments from Our School Life</p>
//       </div>

//       <div className="gallery-intro">
//         <p>Welcome to our gallery. Here you can find photos from various school events and activities. Use the filters below to browse specific categories.</p>
//       </div>

//       <div className="filter-search">
//         <div className="filters">
//           {['All', 'Sports', 'Academics', 'Cultural Events', 'Field Trips'].map(category => (
//             <button 
//               key={category} 
//               onClick={() => setFilter(category)}
//               className={filter === category ? 'active' : ''}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="year-filters">
//           {['All', ...years].map(year => (
//             <button 
//               key={year} 
//               onClick={() => setYearFilter(year)}
//               className={yearFilter === year ? 'active' : ''}
//             >
//               {year}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="image-grid">
//         {filteredImages.length > 0 ? (
//           <ImageGallery 
//             items={galleryItems} 
//             showFullscreenButton={true} 
//             showPlayButton={true} 
//             onClick={(e) => openModal(e.target.src)}  // Pass image src to openModal
//           />
//         ) : (
//           <div>
//             <p>No images available for the selected filters.</p>
//             <ImageGallery 
//               items={galleryItems} 
//               showFullscreenButton={false} 
//               showPlayButton={false} 
//             />
//           </div>
//         )}
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Image Modal"
//         className="modal"
//         overlayClassName="overlay"
//       >
//         {selectedImage && (
//           <div className="modal-content">
//             <img 
//               src={selectedImage.src} 
//               alt={selectedImage.alt} 
//               style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }} 
//             />
//             <div className="modal-controls">
//               <button onClick={handleZoomIn} title="Zoom In"><FaSearchPlus /></button>
//               <button onClick={handleZoomOut} title="Zoom Out"><FaSearchMinus /></button>
//               <button onClick={handleRotate} title="Rotate"><FaSync /></button>
//               <button onClick={handleDownload} title="Download"><FaDownload /></button>
//               <button onClick={handleShare} title="Share"><FaShareAlt /></button>
//             </div>
//             <button className="close-button" onClick={closeModal}>Close</button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Gallery;




