input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
})
record.setMicGain(record.AudioLevels.Low)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
