import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better card deal <br className='sm:block hidden' />{' '}
                    in a few steps
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum qui, aspernatur esse expedita eaque laudantium tenetur
                    corrupti aliquid enim similique soluta reiciendis quasi
                    placeat error quisquam autem, neque assumenda aperiam.
                </p>
                <Button styleTop='mt-10' />
            </div>
            <div>
                <img src={card} alt='card' className='w-[100%] h-[100%]' />
            </div>
        </section>
    );
};

export default CardDeal;
