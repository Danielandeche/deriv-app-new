import { Text, Icon } from '@deriv/components';
import { useStore } from '@deriv/stores';
import './index.scss';

type TBotProps = {
    bot: { name: string; size: string };
};

const RecentWorkspace = ({ bot }: TBotProps) => {
    const { ui } = useStore();
    const { is_desktop } = ui;

    const handleOpen = () => {
        // Handle opening the bot here
    };

    return (
        <div className='bot-list__item' onClick={handleOpen}>
            <div className='bot-list__item__label'>
                <Text size={is_desktop ? 'xs' : 'xxs'}>{bot.name}</Text>
            </div>
            <div className='bot-list__item__file-size'>
                <Text size={is_desktop ? 'xs' : 'xxs'}>{bot.size}</Text>
            </div>
            <div className='bot-list__item__actions'>
                <Icon icon='IcPlay' onClick={handleOpen} />
            </div>
        </div>
    );
};

export default RecentWorkspace;
