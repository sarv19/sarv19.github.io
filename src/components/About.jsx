import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element className="about" name='about'>
            <div className='section-title'>About</div>
            <p>
                Full-stack engineer with a passion for turning coffee into code,
                creating digital wonders, and making bugs disappear like magic! 🔮💻☕ #CodeSorcerer
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                vulputate eget, arcu.
            </p>
        </Element>
    )
}

export default About;