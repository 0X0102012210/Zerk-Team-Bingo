import React, { useRef, useState } from "react";
import {
  Activity,
  AlertCircle,
  Award,
  Axe,
  Book,
  Coins,
  Compass,
  Crown,
  Download,
  Droplet,
  Eye,
  Fish,
  Flame,
  Gem,
  Gift,
  Hammer,
  Heart,
  Key,
  Lock,
  Map,
  Pickaxe,
  Radio,
  Shield,
  Skull,
  Star,
  Sword,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import html2canvas from "html2canvas";
import "./app.css";

const App = () => {
  const [clickedSquares, setClickedSquares] = useState(new Set());
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const gridRef = useRef(null);

  const bingoItems = [
    { icon: Skull, text: "Die to a boss", color: "text-red-400" },
    { icon: Sword, text: "Get a rare drop", color: "text-yellow-400" },
    { icon: Shield, text: "Tank 1000+ damage", color: "text-blue-400" },
    { icon: Droplet, text: "Use a prayer potion", color: "text-cyan-400" },
    { icon: Gem, text: "Cut 100 gems", color: "text-purple-400" },
    { icon: Hammer, text: "Smith a full set", color: "text-orange-400" },
    { icon: Coins, text: "Make 1M+ profit", color: "text-yellow-300" },
    { icon: Fish, text: "Catch a shark", color: "text-blue-300" },
    { icon: Axe, text: "Chop magic logs", color: "text-green-400" },
    { icon: Pickaxe, text: "Mine runite ore", color: "text-gray-400" },
    { icon: Flame, text: "Cook 100 food", color: "text-red-300" },
    { icon: Crown, text: "Complete a quest", color: "text-yellow-400" },
    { icon: Star, text: "Level up a skill", color: "text-white" },
    { icon: Heart, text: "Help another player", color: "text-pink-400" },
    { icon: Zap, text: "Cast 50 spells", color: "text-purple-300" },
    { icon: Target, text: "Hit a 40+", color: "text-red-400" },
    { icon: Award, text: "Complete achievement", color: "text-yellow-500" },
    { icon: TrendingUp, text: "Gain 100k XP", color: "text-green-300" },
    { icon: Activity, text: "Do 10 clue steps", color: "text-orange-300" },
    { icon: Users, text: "Join a group activity", color: "text-blue-400" },
    { icon: Map, text: "Visit 5 cities", color: "text-green-400" },
    { icon: Book, text: "Read a book in-game", color: "text-brown-400" },
    { icon: Key, text: "Open 10 chests", color: "text-yellow-600" },
    { icon: Lock, text: "Unlock new content", color: "text-gray-300" },
    { icon: Gift, text: "Receive a gift", color: "text-red-300" },
    { icon: Compass, text: "Explore new area", color: "text-teal-400" },
    { icon: Trophy, text: "Win a minigame", color: "text-yellow-400" },
    { icon: AlertCircle, text: "Avoid a PK death", color: "text-orange-400" },
    { icon: Eye, text: "Spot a rare spawn", color: "text-indigo-400" },
    { icon: Radio, text: "Use teleport 10x", color: "text-cyan-300" },
  ];

  const toggleSquare = (index) => {
    setClickedSquares((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const saveAsImage = async () => {
    if (!gridRef.current) return;

    try {
      // const html2canvas = (await import('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm')).default;

      const canvas = await html2canvas(gridRef.current, {
        backgroundColor: "#0F0F0F",
        scale: 2,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = "osrs-bingo.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error saving image:", error);
      alert("Failed to save image. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#2E2C29" }}>
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-4xl font-bold text-center mb-2"
          style={{ fontFamily: "serif", color: "#FFCF3F" }}
        >
          Zerk Team Bingo
        </h1>
        <p className="text-center mb-4" style={{ color: "#00FFFF" }}>
          Click squares to mark them complete!
        </p>

        <div className="flex justify-center mb-4">
          <button
            onClick={saveAsImage}
            className="flex items-center gap-2 font-bold py-2 px-6  transition-colors"
            style={{
              backgroundColor: "#E6A519",
              color: "#0F0F0F",
            }}
            onMouseEnter={(e) =>
              e.target.style.backgroundColor = "#FFCF3F"}
            onMouseLeave={(e) =>
              e.target.style.backgroundColor = "#E6A519"}
          >
            <Download className="w-5 h-5" />
            Save as Image
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div
            ref={gridRef}
            className="grid grid-cols-5 gap-2 p-4 "
            style={{
              backgroundColor: "#0F0F0F",
              borderWidth: "4px",
              borderColor: "#694D23",
              borderStyle: "solid",
            }}
          >
            {bingoItems.map((item, index) => {
              const Icon = item.icon;
              const isClicked = clickedSquares.has(index);

              return (
                <div
                  key={index}
                  className="relative aspect-square  cursor-pointer transition-all"
                  style={{
                    backgroundColor: "#46433A",
                    borderWidth: "2px",
                    borderColor: isClicked ? "#E6A519" : "#474745",
                    borderStyle: "solid",
                  }}
                  onClick={() => toggleSquare(index)}
                  onMouseEnter={(e) => {
                    setHoveredSquare(index);
                    if (!isClicked) {
                      e.currentTarget.style.borderColor = "#E6A519";
                    }
                  }}
                  onMouseLeave={(e) => {
                    setHoveredSquare(null);
                    if (!isClicked) {
                      e.currentTarget.style.borderColor = "#474745";
                    }
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className={`w-12 h-12 ${item.color}`} />
                  </div>
                  {isClicked && (
                    <div
                      className="absolute inset-0  flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0, 255, 0, 0.6)" }}
                    >
                      <div className="text-4xl" style={{ color: "#0F0F0F" }}>
                        ✓
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className=" p-6 flex items-center justify-center"
            style={{
              backgroundColor: "#46433A",
              borderWidth: "2px",
              borderColor: "#474745",
              borderStyle: "solid",
              minHeight: "400px",
            }}
          >
            {hoveredSquare !== null
              ? (
                <div className="text-center">
                  <p
                    className="text-3xl font-semibold"
                    style={{ color: "#FFCF3F" }}
                  >
                    {bingoItems[hoveredSquare].text}
                  </p>
                </div>
              )
              : (
                <div
                  className="text-center italic text-lg"
                  style={{ color: "#00FFFF" }}
                >
                  Hover over a square to see details
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
