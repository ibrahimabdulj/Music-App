import React from "react";
import { Card } from "./MusicCardStyles";
import AudioControls from "../AudioControls/AudioControls";

function MusicCard() {
  return (
    <Card>
      <AudioControls />
    </Card>
  );
}

export default MusicCard;
