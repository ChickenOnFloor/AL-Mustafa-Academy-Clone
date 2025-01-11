gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()
tl.from('.hero nav *', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})

gsap.from('.container *', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})

gsap.from('.courses *', {
    y: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.courses',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse', // Controls what happens on enter, leave, re-enter, and re-leave
    }
})


gsap.from('.tutor *', {
    y: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.tutor',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse', // Controls what happens on enter, leave, re-enter, and re-leave
    }
})

gsap.from('.reviews *', {
    y: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.reviews',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse', // Controls what happens on enter, leave, re-enter, and re-leave
    }
})

gsap.from('.location *', {
    y: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.location',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse', // Controls what happens on enter, leave, re-enter, and re-leave
    }
})

gsap.from('.footer *', {
    y: 100,
    opacity: 0,
    duration: .1,
    stagger: .1,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse', // Controls what happens on enter, leave, re-enter, and re-leave
    }
})
