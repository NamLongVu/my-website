import videoBg from '../../assets/intro.mp4';
import {motion} from "framer-motion";

const Intro = () => {
    const styles = {
        main: {
            width: '100%',
            height: '100vh',
            position: 'relative',
        },
        video: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)', // Semi-transparent black overlay
        },
        content: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        },
    };

    return (
        <div style={styles.main}>
            <div style={styles.overlay}></div>
            <video src={videoBg} autoPlay loop muted style={styles.video} />
            <div style={styles.content}>
                <div className='md:space-y-6 px-4'>
                    <motion.h1
                        className='md:text-6xl text-4xl font-bold mb-4 text-center'
                    >
                        Hi👋<p className='text-sky-300'>Welcome to my site </p>
                    </motion.h1>

                </div>
            </div>
        </div>
    );
};

export default Intro;