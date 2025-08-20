import {SiGithub} from 'react-icons/si';
import Buttons from './Button';
import { IProjectData } from '../../interfaces';
import { memo } from 'react';

interface IProps {
    project: IProjectData;
    openModal: () => void;
}

const CardProjects = ({project, openModal}: IProps) => {
    const {imageURL, name, proGithub, proLink, title} = project;
    // handler
    const onClickDetails = () => {
        openModal();
    }

    return (
        <div className="h-70 mb-5 flex flex-col justify-between border border-gray-200 rounded-md text-center transition">
            <div className='overflow-hidden'>
                <img className="w-full md:w-120 md:h-40 rounded-md hover:opacity-70 hover:scale-110 transition" src={imageURL} alt={name} />
            </div>
            
            <div className="space-y-2 md:m-2">
                <h3 className="text-white text-center bg-indigo-800 rounded-md py-1">{title}</h3>
                <div className='flex space-x-4 items-center justify-evenly'>
                    <a href={proGithub} target="_blank"> <SiGithub size={36} className='bg-indigo-800 rounded-md p-1 hover:p-2 transition-all' color='white'></SiGithub> </a>
                    <Buttons className='bg-indigo-800 hover:bg-indigo-600'><a href={proLink} target='_blank'>Show Project</a></Buttons>
                    <Buttons className='bg-red-600 hover:bg-red-400' onClick={onClickDetails}>Details</Buttons>
                </div>
            </div>
        </div>
    )
}

export default memo(CardProjects);