import { useEffect } from 'react'
let listenerCallbacks = new WeakMap()
let watcher 

function handleIntersection(entries) {
    entries.forEach( entry => {
        if(listenerCallbacks.has(entry.target)){
            let callback = listenerCallbacks.get(entry.target)
            if(entry.isIntersecting || entry.intersectionRatio > 0 ){
                watcher.unobserve(entry.target)
                listenerCallbacks.delete(entry.target)
                callback()
            }
        }
    })
}

function getIntersectionObserver() {
    if(watcher === undefined){
        watcher = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            thresholds: [0.1]
        })
    }
    return watcher
}

export function useIntersection(refElement, callback) {
    useEffect(()=>{
        let target = refElement.current
        let observer = getIntersectionObserver();
        listenerCallbacks.set(target, callback)
        observer.observe(target)
        return () =>{
            listenerCallbacks.delete(target)
            observer.unobserve(target)
        }
    }, [])
}