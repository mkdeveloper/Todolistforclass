import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const welcome = async function (msg: string) {
  const welcomeScreen = chalkAnimation.rainbow(msg);

  await sleep();
  welcomeScreen.stop();
};

export default welcome;
