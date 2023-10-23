import { bill, google, apple } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
    return (
        <section className={layout.sectionReverse} id='product'>
            <div className={layout.sectionImgReverse}>
                <img
                    src={bill}
                    alt='bill'
                    className='w-[100%] h-[100%] relative z-[5]'
                />

                <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient' />

                <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient' />
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Easy control your <br className='s:block hidden' />
                    billing & invoicing
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim dicta non quam eaque sint aperiam fugiat earum fugit,
                    quo odio soluta quis doloremque consequatur mollitia
                    adipisci temporibus. Obcaecati, pariatur. Id.
                </p>
                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img
                        src={google}
                        alt='google'
                        className='w-[128px] h-[28px] object-contain cursor-pointer mr-5'
                    />
                    <img
                        src={apple}
                        alt='apple'
                        className='w-[128px] h-[28px] object-contain cursor-pointer'
                    />
                </div>
            </div>
        </section>
    );
};

export default Billing;
