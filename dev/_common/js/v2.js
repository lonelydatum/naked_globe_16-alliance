import {size} from './common'

function start(){
    const tl = new TimelineMax()
    tl.set('.frame1', {opacity:1})
    
    tl.from('.t1a', .4, {x:-size.w}, .3)
    tl.from('.t1b', .4, {x:-size.w}, '+=.8')
    
    tl.to('.frame1', .3, {opacity:0}, '+=1.9')
    
    tl.add('f2')
    tl.to('.frame2', .3,  {opacity:1}, 'f2')

    const Icons = new TimelineMax()
    const iconTime = 30
    Icons.from('#icon-1', iconTime, {x:-size.w, ease:Linear.easeNone}, 0)
    Icons.to('#icon-2', iconTime, {x:-size.w, ease:Linear.easeNone}, 0)
    Icons.from('#icon-3', iconTime, {x:-size.w, ease:Linear.easeNone}, 0)
    Icons.to('#icon-4', iconTime, {x:-size.w, ease:Linear.easeNone}, 0)
    Icons.from('#icon-5', iconTime, {x:-size.w, ease:Linear.easeNone}, 0)
    Icons.to('#icon-6', iconTime, {x:-size.w, ease:Linear.easeNone}, 0)

    tl.from("#t2a", .3, {opacity:0}, "f2+=.5")
    // tl.from("#t2b", .3, {opacity:0}, 'f2+=1.5')
    // tl.from("#t2c", .3, {opacity:0}, 'f2+=2.5')

    tl.to(".t2", .3, {opacity:0}, 'f2+=4')
    tl.from("#t3", .3, {opacity:0}, 'f2+=4.3')

    tl.to(".frame2", .3, {opacity:0}, 'f2+=7')

    tl.set('.frame3', {opacity:1})
    tl.from(".logo", .3, {opacity:0})
    tl.from(".t4", .3, {opacity:0}, '+=.3')
    tl.from(".cta", .3, {opacity:0}, '+=.3')
    // tl.gotoAndPlay('f2')
}

export default start
