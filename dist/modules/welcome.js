import chalkAnimation from "chalk-animation";
const sleep = (ms = 2000) => new Promise((resolve) => {
    setTimeout(resolve, ms);
});
const welcome = async function (msg) {
    const welcomeScreen = chalkAnimation.rainbow(msg);
    await sleep();
    welcomeScreen.stop();
};
export default welcome;
