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
  ];

  return (
    <span
      style={{
        fontFamily:
          fontFamilies[Math.floor(Math.random() * fontFamilies.length) + 1],
        fontSize: 15 + Math.random() * 10,
      }}
    >
      {letter}
    </span>
  );
};

export default Letter;
