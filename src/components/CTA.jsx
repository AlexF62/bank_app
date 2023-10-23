/* eslint-disable react-refresh/only-export-components */
import styles from '../style';
import Button from './Button';

const CTA = () => {
    return (
        <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} text-white sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
            <div className='flex-1 flex flex-col'>
                <h2 className={styles.heading2}>Lets try service now</h2>
                <p className={`styles.paragraph max-w-[470px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente molestiae dolorum officiis voluptatibus, odio
                </p>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-10`}>
                <Button />
            </div>
        </section>
    );
};

export default CTA;
