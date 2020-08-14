// import KUTE from "./../index.js";
import KUTE from "Kyte.js";

var myTween = KUTE.to("#test-block", { translateX: 150 }).start();

KUTE.to(".test-block", { clip: [0, 150, 100, 0] }).start();