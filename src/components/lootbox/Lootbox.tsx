import "./lootbox.css";
import { useState } from "react";
import badSound from "../../assets/duck-quack.mp3";
import goodSound from "../../assets/wow.mp3";
import lootbox from "../../assets/lootbox.png";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

const lootItems = [
  { name: "Player Icon", chance: 40, rubbish: true, rarity: "common" },
  { name: "Legendary Skin", chance: 7.5, rubbish: false, rarity: "legendary" },
  { name: "Epic Skin", chance: 18.5, rarity: "epic" },
  { name: "Rare Skin", chance: 30, rarity: "rare" },
  { name: "Emote", chance: 18.5, rarity: "epic" },
  { name: "Spray", chance: 40, rubbish: true, rarity: "common" },
  { name: "Voice Line", chance: 38, rarity: "common" },
  { name: "Victory Pose", chance: 23, rarity: "rare" },
  { name: "Highlight Intro", chance: 18.5, rubbish: false, rarity: "epic" },
  { name: "A meagre amount of credits", chance: 30, rarity: "common" },
];

const LootboxImage = ({ className }: { className: string }) => {
  return (
    <div>
      <img src={lootbox} alt="lootbox" className={className} />
    </div>
  );
};

const Lootbox = () => {
  const [open, setOpen] = useState(false);
  const [lootReceived, setLootReceived] = useState("");
  const [numberOfBoxes, setNumberOfBoxes] = useState(5);
  const [rarity, setRarity] = useState("");
  const [soundOn, setSoundOn] = useState(true);

  function playSound(soundeffect: any) {
    new Audio(soundeffect).play();
  }

  function getLootItem() {
    if (numberOfBoxes === 0) {
      setNumberOfBoxes(10);
    }
    if (!open && numberOfBoxes > 0) {
      setOpen(true);
      setNumberOfBoxes((prev) => prev - 1);
      const totalChance = lootItems.reduce((acc, item) => acc + item.chance, 0);
      const randomNum = Math.random() * totalChance;
      let cumulativeChance = 0;
      for (let i = 0; i < lootItems.length; i++) {
        cumulativeChance += lootItems[i].chance;
        if (randomNum < cumulativeChance) {
          const myTimeout = setTimeout(setLoot, 1200);
          function setLoot() {
            setLootReceived(lootItems[i].name);
            setRarity(lootItems[i].rarity);
            clearTimeout(myTimeout);
            if (soundOn) {
              if (lootItems[i].rubbish) {
                playSound(badSound);
              }
              if (lootItems[i].rubbish === false) {
                playSound(goodSound);
              }
            }
            setOpen(false);
          }
          return lootItems[i].name;
        }
      }
    }
  }

  return (
    <>
      <div
        className={
          "box-count " + (numberOfBoxes > 4 ? "everything-is-fine" : "warning")
        }
      >
        Loot boxes left: {numberOfBoxes}
      </div>
      <main>
        <LootboxImage className={open ? "open-box" : ""} />
        <button
          onClick={getLootItem}
          disabled={open}
          className={!open ? "shake" : ""}
        >
          {numberOfBoxes > 0 ? "OPEN LOOT BOX" : "OPEN YOUR WALLET"}
        </button>
        <br />
        {lootReceived ? <p>You've received:</p> : null}
        {lootReceived && (
          <p
            className={
              rarity + (!open ? " loot-received animated" : " loot-received")
            }
          >
            {lootReceived}
          </p>
        )}
        <button className="sound" onClick={() => setSoundOn(!soundOn)}>
          {soundOn ? <GiSoundOn /> : <GiSoundOff />}
        </button>
      </main>
      <footer>
        <p>
          by Adie Nunn.{" "}
          <a href="https://www.linkedin.com/in/adie-nunn/">LinkedIn</a> |{" "}
          <a href="https://github.com/cowtipping">GitHub</a> |{" "}
          <a href="http://cowtipping.co.uk">Portfolio</a>
        </p>
      </footer>
    </>
  );
};

export default Lootbox;
