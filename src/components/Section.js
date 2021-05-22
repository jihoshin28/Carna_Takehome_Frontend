import React, {useState, useEffect} from 'react'

let Section = ({children}) => {
    const [ref] = useState(React.createRef())
    useEffect(() => {
        const selectedImage = ref.current
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }
        function imageRender(image) {
            image.classList.add('appear')
        }
        const observer = new IntersectionObserver(function (entries, observer) {
            let entry = entries[0]
            if(!entry.isIntersecting){
                return
            } else {
                imageRender(entry.target)
                observer.unobserve(entry.target)
            }
        }, options)
        observer.observe(selectedImage)
    }, [])

    return (
        <div ref = {ref} class = 'transition'>
            {children}
        </div>
    )
} 

export default Section