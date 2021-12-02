import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import itemImage from '../../../assets/images/comida_1.png';
import { Button, Card } from '../../../components';
import { Container } from './styles';

const Recipes: React.FC = () => {
  return (
    <Container id="recipes">
      <header>
        <h2>Our Best Recipes</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </header>

      <div className="card-slider">
        <Swiper
          slidesOffsetBefore={24}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
              slidesOffsetBefore: 24,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 12,
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
            <Card text="Broccoli Salad with Bacon" imageSrc={itemImage}>
              <Button type="button">See Recipe</Button>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card text="Broccoli Salad with Bacon" imageSrc={itemImage}>
              <Button type="button">See Recipe</Button>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card text="Broccoli Salad with Bacon" imageSrc={itemImage}>
              <Button type="button">See Recipe</Button>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card text="Broccoli Salad with Bacon" imageSrc={itemImage}>
              <Button type="button">See Recipe</Button>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="card-list">
        <Card
          text="Broccoli Salad with Bacon"
          imageSrc={itemImage}
          type="inline"
        >
          <Button type="button">See Recipe</Button>
        </Card>

        <Card
          text="Broccoli Salad with Bacon"
          imageSrc={itemImage}
          type="inline"
        >
          <Button type="button">See Recipe</Button>
        </Card>

        <Card
          text="Broccoli Salad with Bacon"
          imageSrc={itemImage}
          type="inline"
        >
          <Button type="button">See Recipe</Button>
        </Card>

        <Card
          text="Broccoli Salad with Bacon"
          imageSrc={itemImage}
          type="inline"
        >
          <Button type="button">See Recipe</Button>
        </Card>
      </div>
    </Container>
  );
};

export { Recipes };
