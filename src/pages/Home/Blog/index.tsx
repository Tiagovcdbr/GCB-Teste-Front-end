import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import itemImage from '../../../assets/images/blog_image_1.svg';
import itemImage2 from '../../../assets/images/bloco_image_2.svg';
import itemImage3 from '../../../assets/images/bloco_image_3.svg';
import itemImage4 from '../../../assets/images/bloco_image_4.svg';
import { Card } from '../../../components';
import { Container } from './styles';

import autorImage from '../../../assets/images/autor1.svg';
import autorImag2 from '../../../assets/images/autor2.svg';
import autorImag3 from '../../../assets/images/autor3.svg';
import autorImag4 from '../../../assets/images/autor4.svg';


const Blog: React.FC = () => {
  return (
    <Container id="blog">
      <header>
        <h2>Read Our Blog</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </header>

      <div>
        <Swiper
          slidesOffsetBefore={24}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
              slidesOffsetBefore: 24,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 16,
              slidesOffsetBefore: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesOffsetBefore: 80,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 24,
              slidesOffsetBefore: 132,
            },
          }}
        >
          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage}
            >
              <div>
              <img src={autorImage} alt=""/>
                <span>Kevin Ibrahim</span>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage2}
            >
              <div>
                <img src={autorImag2} alt="" />
                <span>Mike Jackson</span>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage3}
            >
              <div>
                <img src={autorImag3} alt="" />
                <span>Bryan McGregor</span>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage4}
            >
              <div>
                <img src={autorImag4} alt="" />
                <span>Jash</span>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export { Blog };
