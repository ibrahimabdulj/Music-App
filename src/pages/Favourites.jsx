import React, { useContext } from "react";
import { Container, TrackContainer, Head } from "../globalStyles";
import Navbar from "../components/Navbar/Navbar";
import {
  Lists,
  AddTolikesIcon,
  OptionsIcon,
  Suggestion,
  Image,
  Title,
} from "../components/Navbar/Tracks/TrackStyles";
import { TbHeartMinus } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import { FavouritesCtx } from "../App";

function Favourites() {
  const {fav, setFav} = useContext(FavouritesCtx);
  const handleRemove = (e, id) => {
    e.preventDefault();
    setFav((prev) => (prev.filter(item => item.id !== id )));
  }
  return (
    <Container>
      <Navbar />
      <TrackContainer>
        <Head>
          <h1>Favourites</h1>
        </Head>
        {fav.map((el, index) => (
          <Lists key={index}>
            <Image src={el.thumbnail} alt="" />
            <Title>{el.title}</Title>
            <Suggestion>
              <AddTolikesIcon>
                <TbHeartMinus />
              </AddTolikesIcon>
              <OptionsIcon
                title="Remove From Favourites"
                onClick={(e) => handleRemove(e, el.id)}
              >
                <SlOptions />
              </OptionsIcon>
            </Suggestion>
          </Lists>
        ))}
      </TrackContainer>
    </Container>
  );
}

export default Favourites;
