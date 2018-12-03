/**
 * Windows stereo output: VoiceMeter input
 * VoiceMeter inputs: none
 * VoiceMeter output A1: MME: Headset (Bose)
 * VoiceMeter output A2: none
 */

const say = require('say');
const readline = require('readline');

const voice = 'Microsoft Zira Desktop';
const speed = 1.1;
const s = function (text) { say.speak(text, voice, speed) };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const question = () => {
    rl.question(`
        om: "Please give me one moment to look that up"
        ins: "I'm sorry, I'm not sure I understand"
        trash: "All of that goes into the trash"
        recycle: "All of that goes into the recycling"

Input: `, (answer) => {
            const lAnswer = answer.toLowerCase()
            switch(answer) {
                case "om":
                    s("Please give me one moment to look that up");
                    break;
                case "ins":
                    s("I'm sorry, I'm not sure I understand");
                    break;
                case "trash":
                    s("All of that goes into the trash");
                    break;
                case "recycle":
                    s("All of that goes into the recycling")
                    break;
                default:
                    s(answer)
                    break;
            }

        question()
    });
}

question()
