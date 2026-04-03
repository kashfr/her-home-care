const fs = require('fs');

let html = fs.readFileSync('daycare-02/index.html', 'utf8');

const replacements = {
  'day-care-hero-image-back': 'hero_bg',
  'day-care-hero-image-2': 'hero_front',
  'day-care-home-about-image': 'about_image',
  'day-care-head-of-school': 'yassmeen_singleton',
  'day-care-home-program-image-3': 'program_3',
  'day-care-home-program-image-2': 'program_2',
  'day-care-home-program-image-1': 'program_1',
  'day-care-home-gallery-image-1': 'gallery_1',
  'day-care-home-gallery-image-2': 'gallery_2',
  'day-care-home-gallery-image-3': 'gallery_3',
  'day-care-home-gallery-image-4': 'gallery_4',
  'day-care-home-gallery-image-5': 'gallery_1',
  'day-care-home-gallery-image-6': 'gallery_2',
  'day-care-home-video-image-thumbnail': 'video_thumbnail',
  'day-care-home-teacher-image-1': 'staff_1',
  'day-care-home-teacher-image-2': 'staff_2',
  'day-care-home-teacher-image-3': 'staff_3',
  'day-care-home-testimonial-image': 'testimonial'
};

Object.entries(replacements).forEach(([oldName, newName]) => {
  // Replace references with sizes like -300x205 or -250x300
  const sizeRegex = new RegExp(`wp-content/uploads/sites/1041/2022/03/${oldName}(-[0-9]+x[0-9]+)?\\.jpg`, 'g');
  html = html.replace(sizeRegex, `her-images/${newName}.png`);
  
  // also handle png if any
  const pngSizeRegex = new RegExp(`wp-content/uploads/sites/1041/2022/03/${oldName}(-[0-9]+x[0-9]+)?\\.png`, 'g');
  html = html.replace(pngSizeRegex, `her-images/${newName}.png`);
});

fs.writeFileSync('daycare-02/index.html', html);
console.log('Replacement complete.');
