import React from "react";
import Headline from "./Headline";
import ActionBar from "./ActionBar";
import Content from "./Content";

export default function Main() {
  return (
    <div className="main">
      <Headline />
      <ActionBar />
      <Content title="About">
      Senior software engineer with a strong background in agile, business and
      product management. Passionate about innovation, learning new stuffs and
      breaking things. Strong believer about how technology can leverage what
      we are and what we do. Looking to get surrounded by good vibes people
      engaged to discover new opportunities.
      </Content>
      <Content title="Interests">
        Meditation, Yoga, music, play guitar, chess, pizza, beer and hard rock.
      </Content>
    </div>
  );
};
