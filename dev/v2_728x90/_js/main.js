import {size} from '../../_common/js/common.js'


// import {size} from './common'

function start(){
    const tl = new TimelineMax()
    TweenLite.to('.bg', 2.5, {y:-150, ease:Linear.easeNone})
    tl.set('.frame1', {opacity:1})

    
    tl.from('.t1b', .2, {opacity:0}, "+=2.5")
    // tl.to('.t1b', .4, {y:size.h}, '+=1.3')

    
    tl.to('.frame1', .3, {opacity:0}, '+=1.7')
    
    tl.add('f2')
    tl.to('.frame2', .3,  {opacity:1}, 'f2')

    const Icons = new TimelineMax()
    const iconTime = 10
    Icons.to('#icon-1', iconTime, {x:"+=100", ease:Linear.easeNone}, 0)
    Icons.to('#icon-2', iconTime, {x:"-=100", ease:Linear.easeNone}, 0)


    tl.from("#bg-white", .3, {opacity:0}, '+=1.5')

    tl.from("#t2a", .3, {opacity:0}, "+=.1")
    tl.from("#t2b", .3, {opacity:0}, '+=.5')
    tl.from("#t2c", .3, {opacity:0}, '+=.5')

    tl.to(".t2", .3, {opacity:0}, '+=1')
    tl.from("#t3", .3, {opacity:0})

    tl.to(".frame2", .3, {opacity:0}, '+=2.1')

    tl.set('.frame3', {opacity:1})
    tl.from(".logo", .3, {opacity:0})
    tl.from(".t4", .3, {opacity:0}, '+=.3')
    tl.from(".cta", .3, {opacity:0}, '+=.3')
    // tl.gotoAndPlay('f2')
}

start()