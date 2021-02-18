import { FC } from 'react';

// LINK style/type
import s from '@/styles/Details';
import { BootcampType } from '@/template';

const Headers: FC<BootcampType.BootcampProps> = ({ bootcamp }) => {
  return (
    <s.Headers>
      <section>
        <img src={bootcamp.logo_url} alt='logo' />
      </section>
      <section>
        <div>
          <h1>
            <div>{bootcamp.kor_name}</div>
          </h1>
          <h4>
            <div>{bootcamp.name}</div>
          </h4>
        </div>

        <table>
          <tbody>
            <tr>
              <th>소개</th>
              <td>{bootcamp.intro}</td>
            </tr>

            <tr>
              <th>점수</th>
              <td>{bootcamp.score}</td>
            </tr>
            {bootcamp.detail_infos.map((detail_info) => (
              <tr key={detail_info.title}>
                <th>{detail_info.title}</th>
                <td>{detail_info.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </s.Headers>
  );
};

export default Headers;
