import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import itemImage from '../../../assets/images/blog_image_1.svg';
import { Card } from '../../../components';
import { Container } from './styles';

const ownerImage =
  'https://ui-avatars.com/api/?size=128&background=FF9900&color=fff&name=Mike%20Jackson';

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
                <img src={ownerImage} alt="Mike Jackson" />
                <span>Mike Jackson</span>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage}
            >
              <div>
                <img src={ownerImage} alt="Mike Jackson" />
                <span>Mike Jackson</span>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage}
            >
              <div>
                <img src={ownerImage} alt="Mike Jackson" />
                <span>Mike Jackson</span>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage}
            >
              <div>
                <img src={ownerImage} alt="Mike Jackson" />
                <span>Mike Jackson</span>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              text="Nutrition: Tips for Improving Your Health"
              imageSrc={itemImage}
            >
              <div>
                <img src={ownerImage} alt="Mike Jackson" />
                <span>Mike Jackson</span>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export { Blog };
