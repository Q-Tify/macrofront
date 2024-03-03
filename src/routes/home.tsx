import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UniversalHeader from '../components/UniversalHeader';
import BooksCollection from './../components/BooksCollection';
import HeadMeta from './../components/HeadMeta';

import image1 from './../public/anime_background.png';
import image2 from './../public/films_background.png';

import image_1 from './../public/books_1.png';

import content from '../content/content';

const {
  animania_title,
  animania_desc,
  film_title,
  film_desc,
  books_title,
  books_desc,
  books_element_title,
  books_element_desc,
} = content;

const HomePage = () => {
  return (
    <>
      <HeadMeta title="MacroFrontEnd" description="main page of Macrofrontend Team" />
      <Navbar />
      <UniversalHeader
        height={600}
        background_img={image1}
        block1_width={445}
        title_text={animania_title}
        description_text={animania_desc}
        button_variant="primary"
        link_to_page="anime"
        button_text="Explore"
        button_type="button"
        element_id_to_scroll=""
      />
      <UniversalHeader
        height={600}
        background_img={image2}
        block1_width={445}
        title_text={film_title}
        description_text={film_desc}
        button_variant="primary"
        link_to_page="films"
        button_text="Explore"
        button_type="button"
        element_id_to_scroll=""
      />
      <UniversalHeader
        height={600}
        block1_width={286}
        title_text={books_title}
        description_text={books_desc}
        button_variant="primary"
        link_to_page="books"
        button_text="Explore"
        button_type="button"
        element_id_to_scroll=""
        children={[
          <BooksCollection
            title_text={books_element_title}
            description_text={books_element_desc}
            description_side="left"
            img_src={image_1}
            img_alt="Image 1"
          />,
        ]}
      />
      <Footer />
    </>
  );
};

export default HomePage;
