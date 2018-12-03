const say = require('say')

const voice = 'Microsoft Zira Desktop'
const speed = 1.25

const s = function () { say.speak('Please give me one moment to check', voice, speed) }
const om = s("Please give me one moment to look that up")

/**
 * Windows stereo output: VoiceMeter input
 * VoiceMeter inputs: none
 * VoiceMeter output A1: MME: Headset (Bose)
 * VoiceMeter output A2: none
 */
