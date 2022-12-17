maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.Low, function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 14)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    }
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.Low, function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 14)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
    }
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 14)
        }
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    basic.pause(500)
})
