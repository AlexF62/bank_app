/* eslint-disable react/prop-types */
import { quotes } from '../assets';

const FeedbackCard = ({ name, content, title, img }) => {
    return (
        <div
            className='flex flex-wrap  justify-between
        flex-row px-10 py-12 rounded-[20px]
         max-w-[370px] md:mr-10 sm:mr-5 
         mr-0 my-5 feedback-card'
        >
            <img src={quotes} className='w-[42px] h-[42px] object-contain' />
            <p className='font-poppins text-[18px] font-normal leading-[32px] text-white my-10'>
                {content}
            </p>
            <div className='flex flex-row'>
                <img
                    src={img}
                    alt={name}
                    className='w-[48px] h-[48px] rounded-full '
                />
                <div className='flex flex-col ml-4'>
                    <h4 className='font-poppins text-[16px] font-semibold leading-[24px] text-dimWhite'>
                        {name}
                    </h4>
                    <h4 className='font-poppins text-[16px] font-semibold leading-[24px] text-dimWhite '>
                        {title}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
