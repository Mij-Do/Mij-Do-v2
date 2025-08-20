import { Switch } from '@headlessui/react';
import { memo } from 'react';

interface IProps {
    enabled: boolean;
    setEnabled: (value: boolean) => void;
}


function SwitchBtn({enabled, setEnabled}: IProps) {
    
    const IconStyles = "uppercase font-bold cursor-pointer bg-indigo-800 rounded-md";

    return (
        <div className="flex space-x-3 items-center justify-center">
            <span className={enabled === false ? `p-1 ${IconStyles}` : "" }>Light</span>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
                />
            </Switch>
            <span className={enabled === true ? `p-1 ${IconStyles}` : "text-black" }>Dark</span>
        </div>
    )
}

export default memo(SwitchBtn);
