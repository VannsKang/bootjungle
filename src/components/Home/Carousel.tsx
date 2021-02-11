import Image from 'next/image';

// LINK image, style
import { TitleImage } from '@/common/images';
import s from '@/styles/Home';

const Carousel = () => {
  return (
    <>
      <s.Carousel>
        <s.Title>
          <div>부트캠프 정글에서 길을 잃으셨나요 ?</div>
          <div>
            B<span>OO</span>TJUN<span>GL</span>E
          </div>
        </s.Title>

        <div>
          <Image src={TitleImage} width={200} height={200} alt='Title Image' />
        </div>
      </s.Carousel>
    </>
  );
};

export default Carousel;
