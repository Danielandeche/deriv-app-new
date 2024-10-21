import { useState, useEffect } from 'react';
import { Text } from '@deriv/components';
import { observer, useStore } from '@deriv/stores';
import { Localize, localize } from '@deriv/translations';
import DeleteDialog from './delete-dialog';
import './index.scss';
import RecentWorkspace from './recent-workspace';

type THeader = {
    label: string;
    className: string;
};

const HEADERS: THeader[] = [
    {
        label: localize('Bot name'),
        className: 'bot-list__header__label',
    },
    {
        label: localize('File size'),
        className: 'bot-list__header__file-size',
    },
];

const DashboardBotList = observer(() => {
    const { ui } = useStore();
    const { is_desktop } = ui;
    const [xmlBots, setXmlBots] = useState<{ name: string; size: string }[]>([]);

    useEffect(() => {
        const fetchXMLBots = async () => {
            const bots = [
                { name: 'dollarprinter', size: '2 KB' },
                { name: 'ftp2', size: '3 KB' },
                { name: 'fypt', size: '1.5 KB' },
            ];
            setXmlBots(bots);
        };

        fetchXMLBots();
    }, []);

    return (
        <div className='bot-list__container'>
            <div className='bot-list__wrapper'>
                <div className='bot-list__title'>
                    <Text size={is_desktop ? 's' : 'xs'} weight='bold'>
                        <Localize i18n_default_text='Your bots:' />
                    </Text>
                </div>
                <div className='bot-list__header'>
                    {HEADERS.map(({ label, className }) => (
                        <div className={className} key={label}>
                            <Text size={is_desktop ? 'xs' : 'xxs'} weight='bold'>
                                {label}
                            </Text>
                        </div>
                    ))}
                </div>
                <div className='bot-list__table'>
                    {xmlBots.map((bot, index) => (
                        <RecentWorkspace key={index} bot={bot} />
                    ))}
                </div>
            </div>
            <DeleteDialog />
        </div>
    );
});

export default DashboardBotList;
