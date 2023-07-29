import Phaser from "phaser";
export default class StartScene extends Phaser.Scene {
  constructor() {
    super("start-scene");
  }
  init() {
    this.startButton = undefined;
    this.startLabel = undefined;
    this.titleLabel = undefined;
  }
  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("start-button", "images/start.png");
  }
  create() {
    this.add.image(200, 320, "background");
    this.startLabel = this.add
      .text(60, 200, "Start Game", {
        fontSize: "48px",
        //@ts-ignore
        fill: "white",
        backgroundColor: "orange",
        fontStyle: "bold",
      })
      .setDepth(1);

    this.titleLabel = this.add
      .text(10, 250, "Corona Buster", {
        fontSize: "48px",
        //@ts-ignore
        fill: "white",
        backgroundColor: "orange",
        fontStyle: "bold",
      })
      .setDepth(1);

    this.replayButton = this.add
      .image(200, 400, "start-button")
      .setInteractive()
      .setScale(0.2);

    this.replayButton.once(
      "pointerup",
      () => {
        this.scene.start("corona-buster-scene");
      },
      this
    );
  }
}
