import { createBoard } from '@wixc3/react-board';
import { TrackerScreen } from '../../../components/tracker-screen/tracker-screen';

export default createBoard({
    name: 'TrackerScreen',
    Board: () => <TrackerScreen />,
    isSnippet: true,
});
