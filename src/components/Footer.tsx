import { useState, useEffect } from 'react';
import Image from 'next/image';

// LINK image/style
import { FooterImage } from '@/common/images';
import s from '@/styles/Footer';

const Footer = () => {
  const [size, setSize] = useState(300);

  useEffect(() => {
    if (window.innerWidth <= 768) setSize(250);
    if (window.innerWidth <= 500) setSize(120);
  });

  return (
    <s.Footer>
      <s.FooterDeco position='left'>
        <Image src={FooterImage} width={size} height={size} alt='footer-left' />
      </s.FooterDeco>
      <section>
        <div>
          <span>@</span> bootjungle project
        </div>
      </section>
      <s.FooterDeco position='right'>
        <Image
          src={FooterImage}
          width={size}
          height={size}
          alt='footer-right'
        />
      </s.FooterDeco>
    </s.Footer>
  );
};

export default Footer;
