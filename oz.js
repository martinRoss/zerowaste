/**
 * Windows stereo output: VoiceMeeter input
 * VoiceMeeter inputs: none
 * VoiceMeeter output A1: MME: Headset (Bose)
 * VoiceMeeter output A2: none
 * Hangouts Microphone: Voicemeeter Output
 */

const say = require('say');
const readline = require('readline');

const voice = 'Microsoft Zira Desktop';
const speed = 1.05;
const s = function (text) { say.speak(text, voice, speed) };
const r = function (text) {
    say.export(text, voice, speed, 'recording.wav', (err) => {
        if (err) {
          return console.error(err)
        }

        console.log('Text has been saved to recording.wav.')
      })
}

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
