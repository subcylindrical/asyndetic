const Letter = ({ letter }) => {
  const fontFamilies = [
    'Ariel',
    'Helvetica',
    'Courier',
    'Courier-Bold',
    'Courier-Oblique',
    'Courier-BoldOblique',
    'Helvetica-Bold',
    'Helvetica-Oblique',
    'Helvetica-BoldOblique',
    'Times-Roman',
    'Times-Bold',
    'Times-Italic',
    'Times-BoldItalic',
    'Palatino',
    'Garamond',
    'Bookman',
    'Avant Garde',
    'Castoro Titling',
    'Caveat',
    'Cinzel',
    'Dancing Script',
    'Libre Baskerville',
    'Nanum Gothic',
    'Pinyon Script',
    'Satisfy',
    'Sedgwick Ave Display',
  ];

  return (
    <span
      onClick={() => console.log('letter clicked')}
      style={{
        fontFamily:
          fontFamilies[Math.floor(Math.random() * fontFamilies.length) + 1],
        fontSize: 20,
      }}
    >
      {letter}
    </span>
  );
};

export default Letter;
