import Link from 'next/link';
import Image from 'next/image';

// LINK image/style
import { LogoImage } from '@/common/images';
import s from '@/styles/Navbar';

const Navbar = () => {
  return (
    <s.Nav>
      <header>
        <Link href='/'>
          <a>
            <s.Logo>
              <div>
                <Image src={LogoImage} width={64} height={64} alt='logo' />
              </div>
              <div>
                B<span>00</span>TJUN<span>GL</span>E
              </div>
            </s.Logo>
          </a>
        </Link>
        <s.NavMenu>
          <Link href='/bootcamps'>
            <a>부트캠프 전체보기</a>
          </Link>
        </s.NavMenu>
      </header>
    </s.Nav>
  );
};

export default Navbar;
